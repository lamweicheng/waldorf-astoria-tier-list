import type { HotelRecord, HotelBrand, StayType, Tier } from './types';

export const TIERS = ['S', 'A', 'B', 'C', 'D'] as const;

export const BRAND_SEGMENTS = ['Hilton Luxury'] as const;

export const HOTEL_BRANDS: HotelBrand[] = [
  { name: 'Waldorf Astoria', color: '#123a63', segment: 'Hilton Luxury' }
];

export const BRAND_BY_NAME = Object.fromEntries(
  HOTEL_BRANDS.map((brand) => [brand.name, brand])
) as Record<string, HotelBrand>;

export const BRANDS_BY_SEGMENT = BRAND_SEGMENTS.map((segment) => ({
  segment,
  brands: HOTEL_BRANDS.filter((brand) => brand.segment === segment)
}));

const TIER_WEIGHT: Record<Tier, number> = {
  S: 0,
  A: 1,
  B: 2,
  C: 3,
  D: 4
};

const STAY_TYPE_WEIGHT: Record<StayType, number> = {
  EXPLORED: 0,
  FUTURE: 1,
  BUCKET_LIST: 2
};

export function sortHotelsByTier(hotels: HotelRecord[]) {
  return [...hotels].sort((left, right) => {
    const byStayType = STAY_TYPE_WEIGHT[left.stayType] - STAY_TYPE_WEIGHT[right.stayType];

    if (byStayType !== 0) {
      return byStayType;
    }

    if (left.tier === null && right.tier === null) {
      const byPositionOnly = left.position - right.position;

      if (byPositionOnly !== 0) {
        return byPositionOnly;
      }

      const byNameOnly = left.name.localeCompare(right.name);

      if (byNameOnly !== 0) {
        return byNameOnly;
      }

      return left.brand.localeCompare(right.brand);
    }

    if (left.tier === null) {
      return 1;
    }

    if (right.tier === null) {
      return -1;
    }

    const byTier = TIER_WEIGHT[left.tier] - TIER_WEIGHT[right.tier];

    if (byTier !== 0) {
      return byTier;
    }

    const byPosition = left.position - right.position;

    if (byPosition !== 0) {
      return byPosition;
    }

    const byName = left.name.localeCompare(right.name);

    if (byName !== 0) {
      return byName;
    }

    return left.brand.localeCompare(right.brand);
  });
}