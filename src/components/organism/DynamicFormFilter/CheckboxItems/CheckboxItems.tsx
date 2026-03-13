import React, { FC } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field';
import { Controller } from 'react-hook-form';
import { optionType } from '@/types';

type CheckboxItemsProps = {
  RHFormFilter: any;
  name: string;
  label: string;
  items: optionType[];
};

const CheckboxItems: FC<CheckboxItemsProps> = ({
  name,
  label,
  items,
  RHFormFilter,
}) => {
  return (
    <FieldGroup>
      <Controller
        name={name}
        control={RHFormFilter.control}
        render={({ field, fieldState }) => (
          <Accordion
            type="single"
            collapsible
            defaultValue={name}
            className="max-w-lg"
          >
            <AccordionItem value={name}>
              <AccordionTrigger className="font-semibold pt-0">
                {label}
              </AccordionTrigger>
              <AccordionContent>
                <FieldSet data-invalid={fieldState.invalid} className="pb-4">
                  <FieldGroup data-slot="category-checkbox-group">
                    {items.map((item) => (
                      <Field
                        key={item.id}
                        orientation="horizontal"
                        data-invalid={fieldState.invalid}
                      >
                        <Checkbox
                          id={`rhf-category-checkbox-${item.id}`}
                          name={field.name}
                          aria-invalid={fieldState.invalid}
                          className="border-black"
                          checked={field.value?.includes(item.id) ?? false}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...field.value, item.id]
                              : field.value.filter(
                                  (value: string) => value !== item.id,
                                );
                            return field.onChange(newValue);
                          }}
                        />
                        <FieldLabel
                          htmlFor={`rhf-category-checkbox-${item.id}`}
                          className="font-normal"
                        >
                          {item.label}
                        </FieldLabel>
                      </Field>
                    ))}
                  </FieldGroup>
                </FieldSet>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      />
    </FieldGroup>
  );
};

export default CheckboxItems;
