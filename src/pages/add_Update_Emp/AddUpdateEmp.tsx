import { StyledEntryForm, StyledEntryFormRow } from "./AddUpdateEmp.style";
import defaultProfileImg from "../../assets/images/profile.png";
import SkillChip from "../../components/skillChip/SkillChip";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  ApiGetEmpData,
  formValues,
  initialEmpDetailsType,
  returnFormValues,
} from "../../core/config/type";
import React, { useEffect, useMemo, useState } from "react";
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
import { uploadImage } from "../Firebase/firebaseConfig";
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
  const [uploadUrl, setUploadUrl] = useState("");

  const fileUploadHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const imagefile = e.target.files && e.target.files[0];
    if (imagefile) {
      const imageUrl = URL.createObjectURL(imagefile);
      setImage(imageUrl);
      try {
        const url = await uploadImage(imagefile);
        setUploadUrl(url);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const currId = navigation.pathname.split("/")[2];

  const {
    response: currEmpResponse,
    loading: currEmpLoading,
    error: currEmpError,
  } = useAxios({
    method: "get",
    url: `${constants.getPostEmpUrl}/${currId}`,
  });
  useEffect(() => {
    if (currEmpResponse !== null) {
      setCurrData(currEmpResponse.data);
    }
  }, [currEmpResponse]);
  let updateViewImg: string;
  try {
    updateViewImg = JSON.parse(currData?.moreDetails).photoId;
    if (
      updateViewImg === "" ||
      updateViewImg === null ||
      updateViewImg === undefined
    ) {
      updateViewImg = defaultProfileImg;
    }
  } catch {
    updateViewImg = defaultProfileImg;
  }

  const imageSrc = updateViewImg;
  const [addedSkills, setAddedSkills] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    deptObj,
    roleObj,
    skillObj,
    setEmployeeObj,
    setInitialEmployeeData,
    deptGetLoading,
    deptGetError,
    roleGetError,
    roleGetLoading,
  } = useEmployeeContext();
  let deptArr = useMemo(
    () => deptObj?.map((each) => each.department),
    [deptObj]
  );
  let roleArr = useMemo(() => roleObj?.map((each) => each.role), [roleObj]);
  let skillArr = useMemo(() => skillObj?.map((each) => each.skill), [skillObj]);
  let locArr = useMemo(
    () => constants.location.map((each) => each.location),
    []
  );

  function updateSearchParams(params: { offset?: string; page: string }) {
    setSearchParams!({
      ...Object.fromEntries(searchParams!.entries()),
      ...params,
    });
  }
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
  let initialLoc: string;
  try {
    initialLoc = JSON.parse(currData?.moreDetails).location;
  } catch {
    initialLoc = "";
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
    initialEmpDetails.location = initialLoc;
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
  }, [currData, isAdd]);

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
    let returnLoc = values.location;
    let returnObj = {
      email: values.email,
      firstName: values.fullName,
      dob: values.dob,
      dateOfJoining: values.doj,
      role: returnRole,
      department: returnDept,
      skills: returnSkills,
      moreDetails: JSON.stringify({ location: returnLoc, photoId: uploadUrl }),
    };
    return returnObj;
  };

  const fetchEmpData = async () => {
    try {
      const res = await getData(
        `${constants.getPostEmpUrl}?limit=${constants.pageLimit}&offset=0&sortBy=firstName&sortDir=asc`
      );
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
          toast.update(addToast, {
            render: "Error In Adding...",
            type: toast.TYPE.ERROR,
            autoClose: 5000,
            closeButton: true,
            closeOnClick: true,
          });
        } finally {
          navigate("/");
          updateSearchParams({ page: "1" });
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
          toast.update(updateToast, {
            render: "Error In Updating...",
            type: toast.TYPE.ERROR,
            autoClose: 5000,
            closeButton: true,
            closeOnClick: true,
          });
        } finally {
          navigate("/");
          updateSearchParams({ page: "1" });
        }
      };
      patchFormData();
    }
  }

  let formBody: React.JSX.Element;
  if (currEmpLoading) {
    formBody = <div>loading...</div>;
  } else if (currEmpError) {
    formBody = <div>{currEmpError}</div>;
  } else
    formBody = (
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
          {deptGetLoading ? (
            <div>loading ...</div>
          ) : deptGetError ? (
            <div>{deptGetError}</div>
          ) : (
            <FormSelectField
              label="Department"
              name="Department"
              arr={deptArr}
            />
          )}

          {roleGetLoading ? (
            <div>loading ...</div>
          ) : roleGetError ? (
            <div>{roleGetError}</div>
          ) : (
            <FormSelectField arr={roleArr} label="Role" name="role" />
          )}
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

          <FormSelectField arr={locArr} label="Location" name="location" />
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
            onClick={(e: MouseEvent) => handleSelectSkill(e)}
            arr={skillArr}
            name="skill"
          />
        </div>

        <button type="submit">submit</button>
      </Form>
    );

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
        let submitObj = handleSubmitObj(values);
        handleFormSubmit(submitObj);
        setSubmitting(false);
      }}
    >
      <StyledEntryForm>{formBody}</StyledEntryForm>
    </Formik>
  );
}
export default AddUpdateEmp;
