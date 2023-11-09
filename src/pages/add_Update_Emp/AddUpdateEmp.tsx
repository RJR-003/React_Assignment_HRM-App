import { StyledEntryForm, StyledEntryFormRow } from "./AddUpdateEmp.style";
import testEmpProfile from "../../assets/images/profile.png";
import SkillChip from "../../components/skillChip/SkillChip";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const tempDepartment: string[] = ["Development", "UI", "UX", "BDG"];
const tempRole: string[] = ["Engineer", "Lead Engineer", "Architect"];
const tempLoc: string[] = ["Trivandrum", "Delhi"];
const tempSkills: string[] = ["HTML/CSS", "Node", "React", "Angular"];

const TextInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};
const FormSelectField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

function AddUpdateEmp() {
  return (
    <Formik
      initialValues={{
        email: "",
        fullName: "",
        dob: "",
        doj: "",
        profileUpload: "",
        role: "",
        Department: "",
        location: "",
        skill: "",
      }}
      validationSchema={Yup.object({
        fullName: Yup.string()
          .max(15, "First name must be less than 15 letters long")
          .required("Required"),

        email: Yup.string()
          .email("should be a valid email")
          .required("Required"),
        doj: Yup.string().required("Required"),
        dob: Yup.string().required("Required"),
        role: Yup.string().required("Required"),
        Department: Yup.string().required("Required"),
        location: Yup.string().required("Required"),
        skill: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <StyledEntryForm>
        <Form>
          <figure className="data-entry-modal-figure">
            <img
              className="data-entry-modal-img"
              src={testEmpProfile}
              alt="employee profile"
            />
          </figure>

          <div className="form-entry">
            <TextInput
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="Enter full name"
            />
          </div>
          <div className="form-entry">
            <TextInput
              label="E-Mail"
              name="email"
              type="text"
              placeholder="Enter your e-mail"
            />
          </div>

          <StyledEntryFormRow>
            <div className="form-entry">
              <TextInput label="Date of Join" name="doj" type="date" />
            </div>
            <div className="form-entry">
              <TextInput label="Date of Birth" type="date" name="dob" />
            </div>
          </StyledEntryFormRow>
          <StyledEntryFormRow>
            <div className="form-entry">
              <FormSelectField label="Department" name="Department">
                <option value="" hidden>
                  select
                </option>
                {tempDepartment.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </FormSelectField>
            </div>
            <div className="form-entry">
              <FormSelectField label="Role" name="role">
                <option value="" hidden>
                  select
                </option>
                {tempRole.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </FormSelectField>
            </div>
          </StyledEntryFormRow>
          <div className="form-location-profile">
            <div className="form-entry">
              <TextInput
                label="Profile-upload"
                name="profileUpload"
                type="file"
                accept="image/*"
              />
            </div>

            <div className="form-entry">
              <FormSelectField label="Location" name="location">
                <option value="" hidden>
                  select
                </option>
                {tempLoc.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </FormSelectField>
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
            <FormSelectField name="skill">
              <option value="" hidden>
                select
              </option>
              {tempSkills.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </FormSelectField>
          </div>

          <button type="submit">submit</button>
        </Form>
      </StyledEntryForm>
    </Formik>
  );
}
export default AddUpdateEmp;
