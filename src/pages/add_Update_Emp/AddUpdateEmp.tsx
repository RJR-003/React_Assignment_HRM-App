import { StyledEntryForm } from "./AddUpdateEmp.style";
import testEmpProfile from "../../assets/images/profile.png";
import InputField from "../../components/inputField/InputField";

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
        <div className="entry-form-row">
          <InputField classname="form-entry" label="Date of Join" type="date" />

          <InputField
            classname="form-entry"
            label="Date of Birth"
            type="date"
          />
        </div>
        <div className="entry-form-row">
          <div className="form-entry">
            <label htmlFor="dep">Department</label>
            <select defaultValue="none" id="dep">
              <option value="none" disabled hidden>
                select
              </option>
              {tempDepartment.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="form-entry">
            <label htmlFor="role">Role</label>
            <select defaultValue="none" id="role">
              <option value="none" disabled hidden>
                select
              </option>
              {tempRole.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-location-profile">
          <InputField
            classname="form-entry"
            label="Profile-upload"
            type="file"
            accept="image/*"
          />
          <div className="form-entry">
            <label htmlFor="loc">location</label>
            <select defaultValue="none" id="loc">
              <option value="none" disabled hidden>
                select
              </option>
              {tempLoc.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-skill">
          <div>
            <p>Skills</p>
            <div className="added-skills">
              <div className="each-skill-added">Skill 1</div>
              <div className="each-skill-added">Skill 1</div>
            </div>
          </div>
          <select defaultValue="none" name="skill" id="skill">
            <option value="none" disabled hidden>
              Choose skill
            </option>
            {tempSkills.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
        <input id="data-entry-submit" type="submit" value="Add" />
      </form>
    </StyledEntryForm>
  );
}
export default AddUpdateEmp;
