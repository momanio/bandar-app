import { useState } from "react";
import { Avatar, Button, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReactSVG } from "react-svg";
import eyeIcon from "assets/icons/eye.svg";
import callIcon from "assets/icons/call.svg";
import smsIcon from "assets/icons/sms.svg";
import documentIcon from "assets/icons/document-download.svg";

const ShowUserDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        sx={{
          bgcolor: "#333638",
          color: "#fff",
          borderColor: "#333638",
          display: "flex",
          padding: "0.375rem",
          minWidth: "2rem",
          borderRadius: "0.75rem",
          alignItems: "center",
          ":hover": {
            borderColor: "#333638",
            bgcolor: "#333638",
          },
        }}
      >
        <ReactSVG src={eyeIcon} />
        عرض
      </Button>
      <Dialog
        scroll="body"
        maxWidth="md"
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "22px",
            backgroundColor: "#111315",
            width: "50rem",
          },
        }}
        onClose={handleClose}
        open={open}
      >
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
        <div className="gap-8 px-10 py-10   bg-[#111315]  item-center justify-center">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              <div className="flex flex-col">
                <span className="text-base font-bold text-white">
                  نائف عبدالله الديرة
                </span>
                <span className="text-base font-bold text-black-600">ذكر</span>
              </div>
            </div>
            <div className="flex gap-[3.125rem]">
              <div className="flex gap-4 px-3.5 py-3 rounded-2xl border border-black-700">
                <ReactSVG src={callIcon} />
                <span className="text-base font-normal text-white">
                  576858327
                </span>
              </div>
              <div className="flex gap-4 px-3.5 py-3 rounded-2xl border border-black-700">
                <ReactSVG src={smsIcon} />
                <span className="text-base font-normal text-white">
                  nai.a@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-5 gap-3 w-auto">
            <span className="text-right font-bold  text-white">
              معلومات شخصية
            </span>
            <div className="flex gap-5  justify-between">
              <div className="w-fit  px-7 py-3 rounded-2xl border border-black-700">
                <span className="text-base font-bold text-white">25 سنة</span>
              </div>
              <div className="w-fit  px-7 py-3 rounded-2xl border border-black-700">
                <span className="text-base font-bold text-white">170 سم</span>
              </div>
              <div className="w-fit  px-7 py-3 rounded-2xl border border-black-700">
                <span className="text-base font-bold text-white">64 كجم</span>
              </div>
              <div className="w-fit  px-7 py-3 rounded-2xl border border-black-700">
                <span className="text-base font-bold text-white">
                  نشاط عالي
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-right font-bold text-white">
              معلومات صحية
            </span>
            <div className="flex gap-6">
              <div className="flex flex-col w-full gap-2">
                <span className="text-right font-normal text-black-300">
                  هل يعاني من أي أمراض مزمنة؟
                </span>
                <div className="overflow-y-auto h-[7.5rem] py-3 px-5 bg-black-950 rounded-2xl">
                  <span className="text-base font-normal text-black-300">
                    لا
                  </span>
                </div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <span className="text-right font-normal text-black-300">
                  هل يعاني من أي إصابة ؟
                </span>
                <div className="overflow-y-auto h-[7.5rem] py-3 px-5 bg-black-950 rounded-2xl ">
                  <span className="text-right font-normal text-black-300">
                    أعاني حاليًا من إصابة شديدة في الركبة نتيجة لحادث رياضي.
                    خلال ممارستي للتمارين القوية، قمت بحركة غير صحيحة مما تسبب
                    في تمزق في الأربطة وإلتواء في الغضروف. هذا الحادث تسبب في
                    انقطاع العمل الرياضي وتقييد حركتي بشكل كبير، وأصبحت بحاجة
                    لعلاج شامل وفترة استراحة طويلة لتعافي الركبة واستعادة القوة
                    والحركة الطبيعية.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <span className="text-base font-bold text-white">
              ملف فحص الطول والوزن ( in Body )
            </span>
            <Button
              variant="contained"
              sx={{
                boxShadow: "none",
                bgcolor: "#111315",
                fontWeight: "400",
                fontSize: "1rem",
                color: "#9EA0A5",
                borderColor: "#111315",
                gap: "1rem",
                paddingY: "0.813rem",
                paddingX: "1.125rem",
                borderRadius: "1.063rem",
                justifyContent: "start",
                flexDirection: "row-reverse",
                ":hover": {
                  borderColor: "#111315",
                  bgcolor: "#111315",
                },
              }}
            >
              تحميل ملف
              <ReactSVG src={documentIcon} />
            </Button>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-right font-bold text-white">صور الجسم</span>
            <div className="flex gap-5">
              <div className="flex flex-col gap-2.5 w-full items-center">
                <img
                  className="h-[11.563rem] w-full object-fill rounded-2xl "
                  src="https://s3-alpha-sig.figma.com/img/98d5/9ae4/d967250f455dc3ee13ec824045d20170?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PTjIeh3tacG5YjME5ktwfO3tdeO~iU1yUWvLLA4FgErriApGjoyiR1Bz94MC984xrCDjAv7RmnzaZYIrx8qjnprWeVtZBFHN9xs2fjPrLDauoF-3sYO84oGnmc6sWlYxcc1shVBBShP0JOYzW~cbvV40lWQRj7v7FzC2Diim1DoK7jCi4a5RVph58KJUNADhJ5p3VnKddW670siFf5tM4YccGXnXQYiSPdjYgAXibN1ngRaQ1VOLyKGt53K13zMVD2b1iOduv3t2q-WSWuD9X5QtQ~3l20Jo68QIXYimxGJbljKctfRGaEATc6Ekxy1gu8semoO2RFNRQ2BneNn9cQ"
                  alt="image1"
                />

                <span className="text-base font-bold text-white">الامام</span>
              </div>
              <div className="flex flex-col gap-2.5 w-full items-center">
                <img
                  className="h-[11.563rem] w-full object-fill  rounded-2xl"
                  src="https://s3-alpha-sig.figma.com/img/98d5/9ae4/d967250f455dc3ee13ec824045d20170?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PTjIeh3tacG5YjME5ktwfO3tdeO~iU1yUWvLLA4FgErriApGjoyiR1Bz94MC984xrCDjAv7RmnzaZYIrx8qjnprWeVtZBFHN9xs2fjPrLDauoF-3sYO84oGnmc6sWlYxcc1shVBBShP0JOYzW~cbvV40lWQRj7v7FzC2Diim1DoK7jCi4a5RVph58KJUNADhJ5p3VnKddW670siFf5tM4YccGXnXQYiSPdjYgAXibN1ngRaQ1VOLyKGt53K13zMVD2b1iOduv3t2q-WSWuD9X5QtQ~3l20Jo68QIXYimxGJbljKctfRGaEATc6Ekxy1gu8semoO2RFNRQ2BneNn9cQ__"
                  alt="image2"
                />

                <span className="text-base font-bold text-white">الامام</span>
              </div>
              <div className="flex flex-col gap-2.5 w-full items-center">
                <img
                  className="h-[11.563rem] w-full object-fill rounded-2xl "
                  src="https://s3-alpha-sig.figma.com/img/98d5/9ae4/d967250f455dc3ee13ec824045d20170?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PTjIeh3tacG5YjME5ktwfO3tdeO~iU1yUWvLLA4FgErriApGjoyiR1Bz94MC984xrCDjAv7RmnzaZYIrx8qjnprWeVtZBFHN9xs2fjPrLDauoF-3sYO84oGnmc6sWlYxcc1shVBBShP0JOYzW~cbvV40lWQRj7v7FzC2Diim1DoK7jCi4a5RVph58KJUNADhJ5p3VnKddW670siFf5tM4YccGXnXQYiSPdjYgAXibN1ngRaQ1VOLyKGt53K13zMVD2b1iOduv3t2q-WSWuD9X5QtQ~3l20Jo68QIXYimxGJbljKctfRGaEATc6Ekxy1gu8semoO2RFNRQ2BneNn9cQ__"
                  alt="image3"
                />

                <span className="text-base font-bold text-white">الامام</span>
              </div>
              <div className="flex flex-col gap-2.5 w-full items-center">
                <img
                  className="h-[11.563rem] w-full object-fill rounded-2xl "
                  src="https://s3-alpha-sig.figma.com/img/98d5/9ae4/d967250f455dc3ee13ec824045d20170?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PTjIeh3tacG5YjME5ktwfO3tdeO~iU1yUWvLLA4FgErriApGjoyiR1Bz94MC984xrCDjAv7RmnzaZYIrx8qjnprWeVtZBFHN9xs2fjPrLDauoF-3sYO84oGnmc6sWlYxcc1shVBBShP0JOYzW~cbvV40lWQRj7v7FzC2Diim1DoK7jCi4a5RVph58KJUNADhJ5p3VnKddW670siFf5tM4YccGXnXQYiSPdjYgAXibN1ngRaQ1VOLyKGt53K13zMVD2b1iOduv3t2q-WSWuD9X5QtQ~3l20Jo68QIXYimxGJbljKctfRGaEATc6Ekxy1gu8semoO2RFNRQ2BneNn9cQ__"
                  alt="image4"
                />

                <span className="text-base font-bold text-white">الامام</span>
              </div>
              <div className="flex flex-col gap-2.5 w-full items-center">
                <img
                  className="h-[11.563rem] w-full object-fill rounded-2xl "
                  src="https://s3-alpha-sig.figma.com/img/98d5/9ae4/d967250f455dc3ee13ec824045d20170?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PTjIeh3tacG5YjME5ktwfO3tdeO~iU1yUWvLLA4FgErriApGjoyiR1Bz94MC984xrCDjAv7RmnzaZYIrx8qjnprWeVtZBFHN9xs2fjPrLDauoF-3sYO84oGnmc6sWlYxcc1shVBBShP0JOYzW~cbvV40lWQRj7v7FzC2Diim1DoK7jCi4a5RVph58KJUNADhJ5p3VnKddW670siFf5tM4YccGXnXQYiSPdjYgAXibN1ngRaQ1VOLyKGt53K13zMVD2b1iOduv3t2q-WSWuD9X5QtQ~3l20Jo68QIXYimxGJbljKctfRGaEATc6Ekxy1gu8semoO2RFNRQ2BneNn9cQ__"
                  alt="image5"
                />

                <span className="text-base font-bold text-white">الامام</span>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
export default ShowUserDialog;
