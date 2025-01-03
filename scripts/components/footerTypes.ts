export * from '@scripts/components/common.ts';

export interface Social {
  icon: string | ImageMetadata;
  url: string;
  label: string | undefined;
  hoveredColor?: string;
}

export interface CopyrightInformation {
  description: string;
  icon: string | undefined;
  url: string | undefined;
}

export interface BuildInformations {
  astroVersion: string | undefined;
  hosting: string | undefined;
}
