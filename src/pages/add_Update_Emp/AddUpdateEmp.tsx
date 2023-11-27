import { StyledEntryForm, StyledEntryFormRow } from "./AddUpdateEmp.style";
import defaultProfileImg from "../../assets/images/profile.png";
import SkillChip from "../../components/skillChip/SkillChip";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ApiGetEmpData,
  formValues,
  initialEmpDetailsType,
  returnFormValues,
} from "../../core/config/type";
import { useEffect, useState } from "react";
import TextInput from "./TextInput";
import FormSelectField from "./FormSelectField";
import { useEmployeeContext } from "../../core/context/EmployeeLIstContext";
import useAxios, {
  getData,
  postData,
  updateData,
} from "../../core/axios/axios";
import { constants } from "../../core/config/constants";
import { toast } from "react-toastify";
const tempLoc: string[] = ["Trivandrum", "Delhi"];
let initialEmpDetails: initialEmpDetailsType = {
  email: "",
  fullName: "",
  dob: "",
  doj: "",
  role: "",
  Department: "",
  location: "",
  skill: "",
};

function AddUpdateEmp() {
  const navigate = useNavigate();
  const navigation = useLocation();
  const [image, setImage] = useState("");
  const [currData, setCurrData] = useState<ApiGetEmpData>();

  const fileUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files && e.target.files[0];
    if (image) {
      const imageUrl = URL.createObjectURL(image);
      setImage(imageUrl);
    }
  };
  const currId = navigation.pathname.split("/")[2];

  const currEmp = useAxios({
    method: "get",
    url: `${constants.getPostEmpUrl}/${currId}`,
  });
  useEffect(() => {
    if (currEmp.response !== null) {
      console.log("currEmp.response", currEmp.response.data);
      setCurrData(currEmp.response.data);
    }
  }, [currEmp.response]);

  const imageSrc = defaultProfileImg;
  console.log(currData, "currdata");
  const [addedSkills, setAddedSkills] = useState<string[]>([]);

  const { deptObj, roleObj, skillObj, setEmployeeObj, setInitialEmployeeData } =
    useEmployeeContext();
  let deptArr = deptObj?.map((each) => each.department);
  let roleArr = roleObj?.map((each) => each.role);
  let skillArr = skillObj?.map((each) => each.skill);

  function handleSelectSkill(e: MouseEvent) {
    let target = e.target as HTMLElement;
    let selectValue: string = (target as HTMLSelectElement).value;
    if (selectValue) {
      let selectedSkills: string[] = addedSkills;
      if (!selectedSkills.includes(selectValue)) {
        selectedSkills.push(selectValue);
        setAddedSkills([...selectedSkills]);
      }
    }
  }

  function handleSkillChipClick(item: string) {
    let tempArr = addedSkills.filter((each) => each !== item);
    setAddedSkills([...tempArr]);
  }

  const isAdd = navigation.pathname.split("/")[1] == "add-employee";
  if (!isAdd && currData) {
    initialEmpDetails.email = currData!.email;
    initialEmpDetails.fullName = currData!.firstName;
    initialEmpDetails.dob = currData!.dob;
    initialEmpDetails.doj = currData!.dateOfJoining;
    initialEmpDetails.role = currData!.role ? currData.role.role : "";
    initialEmpDetails.Department = currData!.department
      ? currData.department.department
      : "";
    initialEmpDetails.location = tempLoc[0];
  } else {
    initialEmpDetails.email = "";
    initialEmpDetails.fullName = "";
    initialEmpDetails.dob = "";
    initialEmpDetails.doj = "";
    initialEmpDetails.role = "";
    initialEmpDetails.Department = "";
    initialEmpDetails.location = "";
  }
  useEffect(() => {
    if (!isAdd && currData) {
      let currSkills = currData?.skills.map((each) => each.skill)!;
      setAddedSkills([...currSkills]);
    }
  }, [currData]);
  console.log(initialEmpDetails, "initialEmpDetails");

  const handleSubmitObj = (values: formValues): returnFormValues => {
    let returnRole = roleObj!
      .filter((each) => each.role === values.role)
      .map((each) => each.id)[0];
    let returnDept = deptObj!
      .filter((each) => each.department === values.Department)
      .map((each) => each.id)[0];
    let returnSkills = skillObj
      ?.filter((each) => addedSkills.includes(each.skill))
      .map((each) => each.id)!;
    let returnObj = {
      email: values.email,
      firstName: values.fullName,
      dob: values.dob,
      dateOfJoining: values.doj,
      role: returnRole,
      department: returnDept,
      skills: returnSkills,
    };
    return returnObj;
  };

  const fetchEmpData = async () => {
    try {
      const res = await getData(constants.getPostEmpUrl);
      console.log(res.data.data.employees, "response of get after updating");
      setEmployeeObj!(res.data.data.employees);
      setInitialEmployeeData!(res.data.data.employees);
    } catch (err) {
      console.log("error while fetching employee for table", err);
    }
  };

  function handleFormSubmit(obj: returnFormValues) {
    if (isAdd) {
      const postFormData = async () => {
        const addToast = toast.info("Adding employee...", {
          autoClose: false,
          closeButton: false,
          closeOnClick: false,
        });
        try {
          const res = await postData(constants.getPostEmpUrl, obj);
          console.log(res, "response form posting");
          fetchEmpData();
          toast.update(addToast, {
            render: "Successfully Added",
            type: toast.TYPE.SUCCESS,
            autoClose: 5000,
            closeButton: true,
            closeOnClick: true,
          });
        } catch (err) {
          console.log("Error in posting data", err);
          toast.update(addToast, {
            render: "Error In Adding...",
            type: toast.TYPE.ERROR,
            autoClose: 5000,
            closeButton: true,
            closeOnClick: true,
          });
        } finally {
          navigate("/");
        }
      };
      postFormData();
    } else {
      const patchFormData = async () => {
        const updateToast = toast.info("Updating employee...", {
          autoClose: false,
          closeButton: false,
          closeOnClick: false,
        });
        try {
          const res = await updateData(
            `${constants.getPostEmpUrl}/${currId}`,
            obj
          );
          console.log(res, "response form updating data");
          fetchEmpData();
          toast.update(updateToast, {
            render: "Successfully Updated",
            type: toast.TYPE.SUCCESS,
            autoClose: 5000,
            closeButton: true,
            closeOnClick: true,
          });
        } catch (error) {
          console.log(error, "error in updating");
          toast.update(updateToast, {
            render: "Error In Updating...",
            type: toast.TYPE.ERROR,
            autoClose: 5000,
            closeButton: true,
            closeOnClick: true,
          });
        } finally {
          navigate("/");
        }
      };
      patchFormData();
    }
  }

  return (
    <Formik
      initialValues={initialEmpDetails}
      validationSchema={Yup.object({
        fullName: Yup.string()
          .trim()
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
        console.log(values, "values of the form");
        console.log(addedSkills, "addedSkils");
        let submitObj = handleSubmitObj(values);
        console.log(submitObj, "final submit object");
        handleFormSubmit(submitObj);
        setSubmitting(false);
      }}
    >
      <StyledEntryForm>
        {currEmp.loading ? (
          <div>loading...</div>
        ) : (
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
                arr={deptArr}
              />
              <FormSelectField arr={roleArr} label="Role" name="role" />
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
                // value={[skillArr]}
                onClick={(e: MouseEvent) => handleSelectSkill(e)}
                arr={skillArr}
                name="skill"
              />
            </div>

            <button type="submit">submit</button>
          </Form>
        )}
      </StyledEntryForm>
    </Formik>
  );
}
export default AddUpdateEmp;
