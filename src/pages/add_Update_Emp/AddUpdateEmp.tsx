import { StyledEntryForm, StyledEntryFormRow } from "./AddUpdateEmp.style";
import defaultProfileImg from "../../assets/images/profile.png";
import SkillChip from "../../components/skillChip/SkillChip";
import { Formik, Form } from "formik";
import { testData } from "../../core/config/testData";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";
import { employee, initialEmpDetails } from "../../core/config/type";
import { useEffect, useState } from "react";
import TextInput from "./TextInput";
import FormSelectField from "./FormSelectField";
const tempLoc: string[] = ["Trivandrum", "Delhi"];

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

  const [addedSkills, setAddedSkills] = useState<string[]>([]);

  function handleSelectSkill(e: MouseEvent) {
    let target = e.target as HTMLElement;
    let selectValue: string = (target as HTMLSelectElement).value;
    if (selectValue) {
      let selectedSkills: string[] = addedSkills;
      if (!selectedSkills.includes(selectValue)) {
        selectedSkills.push(selectValue);
        setAddedSkills([...selectedSkills]);
      }
      console.log(addedSkills);
    }
  }

  function handleSkillChipClick(item: string) {
    let tempArr = addedSkills.filter((each) => each !== item);
    setAddedSkills([...tempArr]);
  }

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
  useEffect(() => {
    if (!isAdd) {
      setAddedSkills([...currData.skills]);
    }
  }, []);

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

          <TextInput
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Enter full name"
          />
          <TextInput
            label="E-Mail"
            name="email"
            type="text"
            placeholder="Enter your e-mail"
          />

          <StyledEntryFormRow>
            <TextInput label="Date of Join" name="doj" type="date" />
            <TextInput label="Date of Birth" type="date" name="dob" />
          </StyledEntryFormRow>
          <StyledEntryFormRow>
            <FormSelectField
              label="Department"
              name="Department"
              arr={testData.department}
            />
            <FormSelectField arr={testData.role} label="Role" name="role" />
          </StyledEntryFormRow>
          <div className="form-location-profile">
            <TextInput
              label="Profile-upload"
              name="profileUpload"
              type="file"
              style={{ maxWidth: "250px" }}
              onChange={fileUploadHandler}
              accept="image/*"
            />

            <FormSelectField arr={tempLoc} label="Location" name="location" />
          </div>
          <div className="form-skill">
            <div>
              <p>Skills</p>
              <div className="added-skills">
                {addedSkills.map(
                  (item) =>
                    item && (
                      <SkillChip
                        onClick={() => handleSkillChipClick(item)}
                        key={item}
                        label={item}
                        isView={false}
                      />
                    )
                )}
              </div>
            </div>
            <FormSelectField
              isMultiple={true}
              value={[testData.skill.map((item) => item.skill)]}
              onClick={(e: MouseEvent) => handleSelectSkill(e)}
              arr={testData.skill.map((item) => item.skill)}
              name="skill"
            />
          </div>

          <button type="submit">submit</button>
        </Form>
      </StyledEntryForm>
    </Formik>
  );
}
export default AddUpdateEmp;
