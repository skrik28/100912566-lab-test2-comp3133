// src/app/mission.ts

// Interface for the nested Links object
export interface Links {
    mission_patch: string | null;
    mission_patch_small: string | null;
    reddit_campaign: string | null;
    reddit_launch: string | null;
    reddit_recovery: string | null;
    reddit_media: string | null;
    presskit: string | null;
    article_link: string | null;
    wikipedia: string | null;
    video_link: string | null;
    youtube_id: string | null;
    flickr_images: string[];
  }
  
  // Interface for the nested Rocket object
  export interface Rocket {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    // Add other rocket properties if needed
  }
  
  // Main interface for the Mission data
  export interface Mission {
    flight_number: number;
    mission_name: string;
    mission_id: string[];
    upcoming: boolean;
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: string;
    launch_date_local: string;
    is_tentative: boolean;
    tentative_max_precision: string;
    tbd: boolean;
    launch_window: number | null;
    rocket: Rocket; // Use the nested Rocket interface
    ships: string[];
    telemetry: {
      flight_club: string | null;
    };
    launch_site: {
      site_id: string;
      site_name: string;
      site_name_long: string;
    };
    launch_success: boolean | null;
    launch_failure_details?: { // Optional property
      time: number;
      altitude: number | null;
      reason: string;
    };
    links: Links; // Use the nested Links interface
    details: string | null;
    static_fire_date_utc: string | null;
    static_fire_date_unix: number | null;
    timeline?: { // Optional property
      [key: string]: number | null;
    };
    crew: any | null; // Define more specifically if needed
  }
  