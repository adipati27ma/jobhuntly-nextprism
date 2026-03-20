'use client';

import React, { FC } from 'react';
import { ExploreDataContainer } from '@/containers';
import { formFilterSchema } from '@/lib/form-schema';
import { CompanyType, filterGroupType } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { COMPANY_INDUSTRY_FILTER } from '@/constants';

type FindCompaniesProps = {};

const FILTER_GROUP: filterGroupType[] = [
  {
    name: 'categories',
    label: 'Industry',
    items: COMPANY_INDUSTRY_FILTER,
  },
];

const DUMMY_COMPANY_DATA: CompanyType[] = [
  {
    name: 'Twitter',
    image: '/images/company2.png',
    industry: 'Media',
    description:
      'Twitter is a social media platform that allows users to share their thoughts and ideas with the world. We are looking for talented individuals to join our team and help us build the future of social media.',
    jobCount: 10,
  },
  {
    name: 'Paragon',
    image: '/images/company.png',
    industry: 'Health Care',
    description:
      'Paragon is a health care technology company that is dedicated to improving the lives of patients and healthcare providers. We are looking for passionate individuals to join our team and help us revolutionize the healthcare industry.',
    jobCount: 5,
  },
  {
    name: 'Google',
    image: '/images/company2.png',
    industry: 'Technology',
    description:
      'Google is a technology company that is dedicated to organizing the world’s information and making it universally accessible and useful. We are looking for talented individuals to join our team and help us build the future of technology.',
    jobCount: 20,
  },
  {
    name: 'Amazon Web Services',
    image: '/images/company.png',
    industry: 'Cloud',
    description:
      'Amazon is an e-commerce and cloud computing company that is dedicated to providing customers with the best possible experience. We are looking for passionate individuals to join our team and help us build the future of e-commerce and cloud computing.',
    jobCount: 15,
  },
];

const FindCompaniesPage: FC<FindCompaniesProps> = ({}) => {
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
        title="dream company"
        subtitle="Explore and find your dream company that matches your passion and skills"
        loading={false}
        data={DUMMY_COMPANY_DATA}
        pageType="company"
      />
    </div>
  );
};

export default FindCompaniesPage;
