'use client';

import { ExploreDataContainer } from '@/containers';
import { formFilterSchema } from '@/lib/form-schema';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { filterGroupType, JobType } from '@/types';
import { JOB_CATEGORY_FILTER } from '@/constants';

interface FindJobsProps {}

const FILTER_GROUP: filterGroupType[] = [
  {
    name: 'categories',
    label: 'Category',
    items: JOB_CATEGORY_FILTER,
  },
];

const DUMMY_JOB_DATA: JobType[] = [
  {
    name: 'Senior Frontend Developer',
    type: 'Technology',
    location: 'Surabaya, Indonesia',
    jobType: 'Full-time',
    categories: ['Engineering', 'Technology'],
    description:
      'We are looking for a Senior Frontend Developer to join our team and help us build amazing web applications.',
    image: '/images/company.png',
    needs: 10,
    applicants: 7,
  },
  {
    name: 'Social Media Assistant',
    type: 'Agency',
    location: 'Paris, France',
    jobType: 'Remote',
    categories: ['Marketing', 'Design'],
    description:
      'We are seeking a Social Media Assistant to help manage our clients social media accounts and create engaging content.',
    image: '/images/company2.png',
    needs: 6,
    applicants: 3,
  },
];

const FindJobsPage: FC<FindJobsProps> = ({}) => {
  const RHFormFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) => {
    console.log(val);
  };

  return (
    <div>
      <ExploreDataContainer
        RHFormFilter={RHFormFilter}
        onSubmitFilter={onSubmitFormFilter}
        filterGroup={FILTER_GROUP}
        title="dream job"
        subtitle="Find your next career at companies like HubSpot, Nike, and Dropbox"
        loading={false}
        data={DUMMY_JOB_DATA}
        pageType="job"
      />
    </div>
  );
};

export default FindJobsPage;
