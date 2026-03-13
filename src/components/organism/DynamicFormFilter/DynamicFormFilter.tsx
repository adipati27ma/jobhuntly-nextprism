import { Form } from '@/components/ui/form';
import { filterGroupType } from '@/types';
import React, { FC } from 'react';
import CheckboxItems from './CheckboxItems';
import { Button } from '@/components/ui/button';

type DynamicFormFilterProps = {
  RHFormFilter: any;
  onSubmitFilter: (values: any) => Promise<void>;
  filterGroup: filterGroupType[];
};

const DynamicFormFilter: FC<DynamicFormFilterProps> = ({
  RHFormFilter,
  onSubmitFilter,
  filterGroup,
}: DynamicFormFilterProps) => {
  return (
    <>
      <Form {...RHFormFilter}>
        <form
          onSubmit={RHFormFilter.handleSubmit(onSubmitFilter)}
          className="w-full space-y-6"
        >
          {filterGroup.map((filter, index) => (
            <CheckboxItems
              key={`checkbox-group-${index}`}
              name={filter.name}
              RHFormFilter={RHFormFilter}
              items={filter.items}
              label={filter.label}
            />
          ))}

          <Button className="mt-5 w-full">Apply Filter</Button>
          <Button variant="outline" className="mt-3 w-full">
            Reset Filter
          </Button>
        </form>
      </Form>
    </>
  );
};

export default DynamicFormFilter;
