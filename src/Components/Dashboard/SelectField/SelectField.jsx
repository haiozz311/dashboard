import React from "react";
import { Controller } from "react-hook-form";
import Select from "@material-ui/core/Select";
import { useSelector } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";

export default function SelectField(props) {
  const { ListCategory, loading, error } = useSelector(
    (state) => state.CategoryReducer
  );

  const createCategoryList = (ListCategory, options = []) => {
    for (let category of ListCategory) {
      options.push({
        value: category._id,
        name: category.name,
        parentId: category.parentId,
        type: category.type,
      });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };
  const { name, form, label, index, value } = props;
  const { errors, formState } = form;
  const hasErr = formState.touched[name] && errors[name];
  return (
    <>
      <Controller
        name={name}
        control={form.control}
        as={
          <Select labelId={`demo-simple-select-label-${index}`}>
            <MenuItem value="">Select category</MenuItem>
            {createCategoryList(ListCategory).map((option) => (
              <MenuItem key={option.name} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        }
        defaultValue={value}
        fullWidth
        autoFocus
        label={label}
        error={!!hasErr}
        // helperText={errors[name]?.message}
      />
    </>
  );
}
