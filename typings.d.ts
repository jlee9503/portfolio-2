interface SanityBody {
  _createAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInfo: string;
  email: string;
  name: string;
  phoneNum: string;
  role: string;
  heroImage: Image;
  profilePic: Image;
}

export interface Technology extends SanityBody {
  _type: 'skill';
  image: Image;
  progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Project extends SanityBody {
  _type: 'project';
  title: string;
  projectImage: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  currentWork: boolean;
  dateStarted: Date;
  dateEnded: Date;
  jobTitle: string;
  points: Array;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
