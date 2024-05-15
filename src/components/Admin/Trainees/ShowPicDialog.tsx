import { useState } from "react";
import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReactSVG } from "react-svg";
import redEye from "assets/icons/redEye.svg";

const ShowPicDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex gap-2 cursor-pointer" onClick={handleClickOpen}>
        <ReactSVG src={redEye} />
        <span className="font-medium text-sm text-[#FFC9C9]">عرض</span>
      </div>
      <Dialog
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "22px",
            backgroundColor: "#111315",
          },
        }}
        onClose={handleClose}
        open={open}
      >
        <div>
          <IconButton
            aria-label="close"
            onClick={() => {
              handleClose();
            }}
            sx={{
              position: "absolute",
              left: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <div className="flex flex-col gap-8 p-9 w-[30.75rem] bg-[#111315]  item-center justify-center">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex flex-col items-center gap-4 w-full text-white">
                <span className="w-[25rem] pb-5 flex-grow-0 font-bold text-center text-white text-2xl leading-6">
                  صور الجسم
                </span>
              </div>
              <div className="w-fit  px-7 py-3 rounded-2xl border border-black-700">
                <span className="text-base  text-gray-400">25/234/32423</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-5">
                <div className="flex flex-col gap-2.5 w-full items-center">
                  <img
                    className="h-[11.563rem] w-full object-fill rounded-2xl "
                    src="https://s3-alpha-sig.figma.com/img/98d5/9ae4/d967250f455dc3ee13ec824045d20170?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PTjIeh3tacG5YjME5ktwfO3tdeO~iU1yUWvLLA4FgErriApGjoyiR1Bz94MC984xrCDjAv7RmnzaZYIrx8qjnprWeVtZBFHN9xs2fjPrLDauoF-3sYO84oGnmc6sWlYxcc1shVBBShP0JOYzW~cbvV40lWQRj7v7FzC2Diim1DoK7jCi4a5RVph58KJUNADhJ5p3VnKddW670siFf5tM4YccGXnXQYiSPdjYgAXibN1ngRaQ1VOLyKGt53K13zMVD2b1iOduv3t2q-WSWuD9X5QtQ~3l20Jo68QIXYimxGJbljKctfRGaEATc6Ekxy1gu8semoO2RFNRQ2BneNn9cQ"
                    alt="image1"
                  />
                </div>
                <div className="flex flex-col gap-2.5 w-full items-center">
                  <img
                    className="h-[11.563rem] w-full object-fill rounded-2xl "
                    src="https://s3-alpha-sig.figma.com/img/98d5/9ae4/d967250f455dc3ee13ec824045d20170?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PTjIeh3tacG5YjME5ktwfO3tdeO~iU1yUWvLLA4FgErriApGjoyiR1Bz94MC984xrCDjAv7RmnzaZYIrx8qjnprWeVtZBFHN9xs2fjPrLDauoF-3sYO84oGnmc6sWlYxcc1shVBBShP0JOYzW~cbvV40lWQRj7v7FzC2Diim1DoK7jCi4a5RVph58KJUNADhJ5p3VnKddW670siFf5tM4YccGXnXQYiSPdjYgAXibN1ngRaQ1VOLyKGt53K13zMVD2b1iOduv3t2q-WSWuD9X5QtQ~3l20Jo68QIXYimxGJbljKctfRGaEATc6Ekxy1gu8semoO2RFNRQ2BneNn9cQ"
                    alt="image1"
                  />
                </div>
                <div className="flex flex-col gap-2.5 w-full items-center">
                  <img
                    className="h-[11.563rem] w-full object-fill rounded-2xl "
                    src="https://s3-alpha-sig.figma.com/img/98d5/9ae4/d967250f455dc3ee13ec824045d20170?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PTjIeh3tacG5YjME5ktwfO3tdeO~iU1yUWvLLA4FgErriApGjoyiR1Bz94MC984xrCDjAv7RmnzaZYIrx8qjnprWeVtZBFHN9xs2fjPrLDauoF-3sYO84oGnmc6sWlYxcc1shVBBShP0JOYzW~cbvV40lWQRj7v7FzC2Diim1DoK7jCi4a5RVph58KJUNADhJ5p3VnKddW670siFf5tM4YccGXnXQYiSPdjYgAXibN1ngRaQ1VOLyKGt53K13zMVD2b1iOduv3t2q-WSWuD9X5QtQ~3l20Jo68QIXYimxGJbljKctfRGaEATc6Ekxy1gu8semoO2RFNRQ2BneNn9cQ"
                    alt="image1"
                  />
                </div>
                <div className="flex flex-col gap-2.5 w-full items-center">
                  <img
                    className="h-[11.563rem] w-full object-fill rounded-2xl "
                    src="https://s3-alpha-sig.figma.com/img/98d5/9ae4/d967250f455dc3ee13ec824045d20170?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PTjIeh3tacG5YjME5ktwfO3tdeO~iU1yUWvLLA4FgErriApGjoyiR1Bz94MC984xrCDjAv7RmnzaZYIrx8qjnprWeVtZBFHN9xs2fjPrLDauoF-3sYO84oGnmc6sWlYxcc1shVBBShP0JOYzW~cbvV40lWQRj7v7FzC2Diim1DoK7jCi4a5RVph58KJUNADhJ5p3VnKddW670siFf5tM4YccGXnXQYiSPdjYgAXibN1ngRaQ1VOLyKGt53K13zMVD2b1iOduv3t2q-WSWuD9X5QtQ~3l20Jo68QIXYimxGJbljKctfRGaEATc6Ekxy1gu8semoO2RFNRQ2BneNn9cQ"
                    alt="image1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ShowPicDialog;
