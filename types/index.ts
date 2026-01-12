// TypeScript type definitions
// Some types are defined but may need to be expanded

export interface ShipInfo {
  shipName: string;
  captainName: string;
}

export interface SystemStatus {
  lifeSupport: 'online' | 'offline' | 'critical';
  shields: number; // 0-100
  navigation: 'operational' | 'offline' | 'error';
  warpCore: 'stable' | 'unstable' | 'critical';
}

// Add more type definitions as needed

