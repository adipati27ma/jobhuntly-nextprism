export type JobType = {
  image: string;
  jobType: string;
  name: string;
  type: string;
  location: string;
  description: string;
  categories: string[];
  needs: number;
  applicants: number;
};

export type CompanyType = {
  image: string;
  name: string;
  industry: string;
  description: string;
  jobCount: number;
};

export type optionType = {
  id: string;
  label: string;
};

export type filterGroupType = {
  label: string;
  name: string;
  items: optionType[];
};
