import { ReactNode } from "react";

function SelectField({ id, children }: { id: string; children: ReactNode }) {
  return (
    <select defaultValue="none" id={id}>
      <option value="none" disabled hidden>
        select
      </option>
      {children}
    </select>
  );
}

export default SelectField;
