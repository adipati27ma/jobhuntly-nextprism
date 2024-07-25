import React, { FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components';

interface FormJobSearchProps {}

const FormJobSearch: FC<FormJobSearchProps> = ({}) => {
  return (
    <>
      <div className="mt-6 bg-white p-4 shadow-md inline-flex items-center gap-4 relative w-max">
        <div className="inline-flex gap-3 items-center">
          <AiOutlineSearch className="w-6 h-6" />
          <Input
            className="py-8 w-[300px] border-none"
            placeholder="Job Title or keyword"
          />
        </div>
        <div className="inline-flex gap-3 items-center">
          <HiOutlineLocationMarker className="w-6 h-6" />
          <Select>
            {/* data-[placeholder] is for styling placeholder */}
            <SelectTrigger className="w-[300px] border-none py-8 outline-none data-[placeholder]:text-gray-500">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button className="py-8 px-10 text-lg">Search my job</Button>
        </div>
      </div>
      <div className="text-muted-foreground mt-3">
        Popular : UI Designer, UX Researcher, Android, Admin
      </div>
    </>
  );
};

export default FormJobSearch;
