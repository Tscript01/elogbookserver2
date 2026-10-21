import { PresenceStatus } from "../generated/prisma";

export interface GeoCheckInput {
  submittedLat: number;
  submittedLng: number;
  accuracy: number;
  isMocked?: boolean;
  companyLat: number;
  companyLng: number;
  geofenceRadiusM: number;
  lastCheckIn?: {
    lat: number;
    lng: number;
    timestamp: Date;
  } | null;
  currentTimestamp: Date;
}

export interface GeoVerificationResult {
  distanceMeters: number;
  presenceStatus: PresenceStatus;
  riskScore: number;
  flags: string[];
}

export function calculateHaversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371000;
  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

export function verifyPresenceTelemetry(input: GeoCheckInput): GeoVerificationResult {
  const flags: string[] = [];
  let riskScore = 0;

  if (input.isMocked) {
    flags.push("MOCK_LOCATION_PROVIDER_DETECTED");
    riskScore += 90;
  }

  if (input.accuracy === 0) {
    flags.push("SUSPICIOUS_EXACT_ACCURACY");
    riskScore += 40;
  } else if (input.accuracy > 800) {
    flags.push("DEGRADED_SIGNAL_ACCURACY");
    riskScore += 20;
  }

  const distanceMeters = calculateHaversineDistance(
    input.submittedLat,
    input.submittedLng,
    input.companyLat,
    input.companyLng
  );

  if (input.lastCheckIn) {
    const timeDeltaHours =
      (input.currentTimestamp.getTime() - new Date(input.lastCheckIn.timestamp).getTime()) /
      (1000 * 60 * 60);

    if (timeDeltaHours > 0 && timeDeltaHours < 4) {
      const distanceTraveled = calculateHaversineDistance(
        input.lastCheckIn.lat,
        input.lastCheckIn.lng,
        input.submittedLat,
        input.submittedLng
      );
      const speedKmh = distanceTraveled / 1000 / timeDeltaHours;

      if (speedKmh > 350) {
        flags.push("IMPOSSIBLE_TRAVEL_SPEED");
        riskScore += 80;
      }
    }
  }

  const effectiveRadius = input.geofenceRadiusM + Math.min(input.accuracy, 100);

  let presenceStatus: PresenceStatus;

  if (riskScore >= 70) {
    presenceStatus = PresenceStatus.HIGH_RISK_SPOOFED;
  } else if (distanceMeters <= effectiveRadius) {
    presenceStatus = PresenceStatus.VERIFIED_ON_SITE;
  } else {
    presenceStatus = PresenceStatus.OUT_OF_BOUNDS;
  }

  return {
    distanceMeters,
    presenceStatus,
    riskScore,
    flags,
  };
}