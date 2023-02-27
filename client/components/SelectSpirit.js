import Select from "react-select";
import { useForm, Controller, get } from "react-hook-form";
import React, { useState } from "react";
import { getDrink } from "../store/drinks";
import { connect } from "react-redux";

let spirits = [
  { label: "Gin", value: "Gin" },
  { label: "Vodka", value: "Vodka" },
  { label: "Tequila", value: "Tequila" },
  { label: "Bourbon", value: "Bourbon" },
  { label: "Whiskey", value: "Whiskey" },
  { label: "Scotch", value: "Scotch" },
];

export const SelectSpirit = (props) => {
  const [spiritValue, setSpiritValue] = useState({ value: "" });
  const { handleSubmit, control } = useForm();

  const saveData = (form_data) => {
    props.getDrink(form_data.spirit.value);
  };

  return (
    <div className='SelectSpirit'>
      <form onSubmit={handleSubmit(saveData)}>
        {!spiritValue && <span></span>}
        {spiritValue && (
          <Controller
            name='spirit'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={spirits}
                defaultValue={spirits.find((s) => s.value === spiritValue)}
              />
            )}
            rules={{ required: true }}
          />
        )}

        <button type='submit'>Choose your poison</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDrink: (value) => dispatch(getDrink(value)),
  };
};

export default connect(null, mapDispatchToProps)(SelectSpirit);
