import { StyledEntryForm, StyledEntryFormRow } from "./AddUpdateEmp.style";
import defaultProfileImg from "../../assets/images/profile.png";
import SkillChip from "../../components/skillChip/SkillChip";
import { Formik, Form, useField } from "formik";
import { testData } from "../../core/config/testData";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";
import { employee, initialEmpDetails } from "../../core/config/type";
import { useState } from "react";

const tempLoc: string[] = ["Trivandrum", "Delhi"];

const TextInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="form-error">{meta.error}</div>
      ) : null}
    </>
  );
};
const FormSelectField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="form-error">{meta.error}</div>
      ) : null}
    </>
  );
};

function AddUpdateEmp() {
  const navigation = useLocation();
  const [image, setImage] = useState("");
  const fileUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files && e.target.files[0];
    if (image) {
      const imageUrl = URL.createObjectURL(image);
      setImage(imageUrl);
    }
  };

  const currId = navigation.pathname.split("/")[2];
  console.log(currId, "currId");
  const currData: employee = testData.employee.find(
    (item) => item.id == Number(currId)
  )!;
  const imageSrc = currData?.imageSrc;

  let initialEmpDetails: initialEmpDetails = {
    email: "",
    fullName: "",
    dob: "",
    doj: "",
    role: "",
    Department: "",
    location: "",
    skill: "",
  };
  const isAdd = navigation.pathname.split("/")[1] == "add-employee";
  if (!isAdd) {
    initialEmpDetails.email = currData.email;
    initialEmpDetails.fullName = currData.fullName;
    initialEmpDetails.dob = currData.dateOfBirth;
    initialEmpDetails.doj = currData.dateOfJoin;
    initialEmpDetails.role = currData.role;
    initialEmpDetails.Department = currData.department;
    initialEmpDetails.location = currData.location;
  }

  return (
    <Formik
      initialValues={initialEmpDetails}
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
              src={isAdd ? image || defaultProfileImg : image || imageSrc}
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
                {testData.department.map((item) => (
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
                {testData.role.map((item) => (
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
                style={{ maxWidth: "250px" }}
                onChange={fileUploadHandler}
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
            <div className="form-entry">
              <FormSelectField name="skill">
                <option value="" hidden>
                  select
                </option>
                {testData.skill.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </FormSelectField>
            </div>
          </div>

          <button type="submit">submit</button>
        </Form>
      </StyledEntryForm>
    </Formik>
  );
}
export default AddUpdateEmp;
