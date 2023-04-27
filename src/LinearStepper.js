import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext
} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1)
  }
}));

function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Personal Information",
    "Payment"
  ];
}
const BasicForm = () => {
  const {
    control,
    formState: { errors }
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="firstName"
        type="text"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.firstName)}
            helperText={errors.firstName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        type="text"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.lastName)}
            helperText={errors.lastName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="nickName"
        type="text"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.nickName)}
            helperText={errors.nickName?.message}
          />
        )}
      />
    </>
  );
};
const ContactForm = () => {
  const {
    control,
    formState: { errors }
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="emailAddress"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="email"
            type="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.emailAddress)}
            helperText={errors.emailAddress?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="phone-number"
            type="number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.phoneNumber)}
            helperText={errors.phoneNumber?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="alternatePhone"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="alternate-phone"
            type="number"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.alternatePhone)}
            helperText={errors.alternatePhone?.message}
          />
        )}
      />
    </>
  );
};
const PersonalForm = () => {
  const {
    control,
    formState: { errors }
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="address1"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.address1)}
            helperText={errors.address1?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="address2"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.address2)}
            helperText={errors.address2?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.country)}
            helperText={errors.country?.message}
          />
        )}
      />
    </>
  );
};
const PaymentForm = () => {
  const {
    control,
    formState: { errors }
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="cardNumber"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="cardNumber"
            label="Card Number"
            type="number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.cardNumber)}
            helperText={errors.cardNumber?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="cardMonth"
        type="date"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.cardMonth)}
            helperText={errors.cardMonth?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="cardYear"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.cardYear)}
            helperText={errors.cardYear?.message}
          />
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <ContactForm />;
    case 2:
      return <PersonalForm />;
    case 3:
      return <PaymentForm />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: ""
    }
  });

  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  let [newdata, setNewData] = useState([]);
  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };
  const isStepFalied = () => {
    return Boolean(Object.keys(methods.formState.errors).length);
  };
  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          newdata.push(data);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = () => {
  //   console.log(newData);
  // };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepFalied() && activeStep == index) {
            labelProps.error = true;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        // <Typography hieght="200px" width="300px">
        //   {newdata.firstName}
        // </Typography>
        newdata.map((elem, index) => {
          return (
            <div key={index}>
              <h2>Submitted Response sucessfully</h2>
              <h3>Here is the list What we have recieved from you</h3>
              <li>{elem.firstName}</li>
              <li>{elem.lastName}</li>
              <li>{elem.nickName}</li>
              <li>{elem.emailAddress}</li>
              <li>{elem.phoneNumber}</li>
              <li>{elem.alternatePhone}</li>
              <li>{elem.address1}</li>
              <li>{elem.address2}</li>
              <li>{elem.country}</li>
              <li>{elem.cardNumber}</li>
              <li>{elem.cardMonth}</li>
              <li>{elem.cardYear}</li>
              
            </div>
          );
        })
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                onClick={() => console.log(newdata)}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
