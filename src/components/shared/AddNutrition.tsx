import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import uploadImage from "assets/icons/uploadImage.svg";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  styled,
} from "@mui/material";
import addCircle from "assets/icons/add-circle.svg";
import CloseIcon from "@mui/icons-material/Close";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AddNutrition = ({
  nextActive,
  placeHolder,
  label,
  icon,
}: {
  nextActive: () => void;
  placeHolder: string;
  label: string;
  icon: React.ReactNode;
}) => {
  const [image, setImage] = useState<string | undefined>(undefined);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };
  return (
    <div className="flex flex-col gap-8 items-center w-full">
      {image ? (
        <div
          style={{
            backgroundImage: `url("${image}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          className="rounded-2xl h-[26.438rem] w-[26.438rem] relative"
        >
          <IconButton
            aria-label="close"
            onClick={() => {
              setImage(undefined);
            }}
            sx={{
              position: "absolute",
              left: 10,
              top: 10,
              color: (theme) => theme.palette.grey[50],
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
      ) : (
        <div className="bg-[#212426] rounded-2xl h-[26.438rem] w-[26.438rem] flex flex-col items-center py-10 px-[5.313rem]">
          <ReactSVG src={uploadImage} />
          <span className="text-sm font-bold text-white">صورة الصنف</span>
          <span className="text-sm font-normal text-black-500 text-center pt-3 pb-8">
            يجب أن يكون حجم الصورة أقل من 2 ميجابايت ويجب أن تكون أبعادها مربعة
          </span>
          <Button
            component="label"
            variant="contained"
            sx={{
              bgcolor: "#F23A3A",
              fontWeight: "700",
              color: "white",
              borderColor: "#F23A3A",
              gap: "0.75rem",
              padding: "0.75rem",
              borderRadius: "0.75rem",
              alignItems: "center",
              ":hover": {
                borderColor: "#F23A3A",
                bgcolor: "#F23A3A",
              },
            }}
            tabIndex={-1}
            role={undefined}
          >
            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            <ReactSVG src={addCircle} />
            انقر للرفع
          </Button>
        </div>
      )}
      <div className="flex flex-col gap-3 w-full">
        <span className="text-base font-medium text-white">{label}</span>
        <TextField
          sx={{
            input: { color: "#9EA0A5", paddingLeft: 5 },
          }}
          InputLabelProps={{
            style: { fontWeight: "400", marginRight: 30 },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">{icon}</InputAdornment>
            ),
          }}
          className="bg-black-950 rounded-[20px]"
          label={placeHolder}
          variant="outlined"
        />
      </div>
      <Button
        onClick={nextActive}
        sx={{
          width: "100%",
          bgcolor: "#F23A3A",
          borderRadius: "1rem",
          paddingY: "0.906rem",
          color: "#FFFFFF",
          ":hover": {
            bgcolor: "#F23A3A",
          },
        }}
      >
        التالي
      </Button>
    </div>
  );
};

export default AddNutrition;
