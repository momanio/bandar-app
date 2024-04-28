import { object, string } from "yup";
import { PASSWORD_PATTERN } from "utils/Admin/constant";

export const loginSchema = object({
  email: string()
    .required("البريد الالكتروني مطلوب !")
    .email("يرجى إدخال البريد الإلكتروني الصحيح"),
  password: string()
    .required("كلمة المرور مطلوبة !")
    .matches(PASSWORD_PATTERN, "يجب أن تكون كلمة المرور على الأقل 6 أحرف"),
}).required();
