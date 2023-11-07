import { StyledEntryForm, StyledEntryFormRow } from "./AddUpdateEmp.style";
import testEmpProfile from "../../assets/images/profile.png";
import InputField from "../../components/inputField/InputField";
import SkillChip from "../../components/skillChip/SkillChip";
import SelectField from "../../components/selectField/SelectField";

const tempDepartment: string[] = ["Development", "UI", "UX", "BDG"];
const tempRole: string[] = ["Engineer", "Lead Engineer", "Architect"];
const tempLoc: string[] = ["Trivandrum", "Delhi"];
const tempSkills: string[] = ["HTML/CSS", "Node", "React", "Angular"];

function AddUpdateEmp() {
  return (
    <StyledEntryForm>
      <form className="data-entry-form" noValidate>
        <figure className="data-entry-modal-figure">
          <img
            className="data-entry-modal-img"
            src={testEmpProfile}
            alt="employee profile"
          />
        </figure>

        <InputField
          classname="form-entry"
          label="Full Name"
          type="text"
          placeholder="Enter full name"
        />

        <InputField
          classname="form-entry"
          label="E-Mail"
          type="email"
          placeholder="Enter E-mail"
        />
        <StyledEntryFormRow>
          <InputField classname="form-entry" label="Date of Join" type="date" />

          <InputField
            classname="form-entry"
            label="Date of Birth"
            type="date"
          />
        </StyledEntryFormRow>
        <StyledEntryFormRow>
          <div className="form-entry">
            <label htmlFor="dep">Department</label>
            <SelectField id="dep">
              {tempDepartment.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SelectField>
          </div>

          <div className="form-entry">
            <label htmlFor="role">Role</label>
            <SelectField id="role">
              {tempRole.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SelectField>
          </div>
        </StyledEntryFormRow>
        <div className="form-location-profile">
          <InputField
            classname="form-entry"
            label="Profile-upload"
            type="file"
            accept="image/*"
          />
          <div className="form-entry">
            <label htmlFor="loc">location</label>
            <SelectField id="loc">
              {tempLoc.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SelectField>
          </div>
        </div>
        <div className="form-skill">
          <div>
            <p>Skills</p>
            <div className="added-skills">
              <SkillChip>Skill 1</SkillChip>
              <SkillChip>Skill 2</SkillChip>
            </div>
          </div>
          <SelectField id="skill">
            {tempSkills.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </SelectField>
        </div>
        <input id="data-entry-submit" type="submit" value="Add" />
      </form>
    </StyledEntryForm>
  );
}
export default AddUpdateEmp;
