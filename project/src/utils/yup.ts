import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required().max(120),
  crm: yup.string().required().max(7),
  tel_fix: yup.string().required().matches(new RegExp(`^[0-9]+$`)),
  cell: yup.string().required().matches(new RegExp(`^[0-9]+$`)),
  cep: yup.string().required().matches(new RegExp(`^[0-9]+$`)),
  specialty: yup.array().min(2),
});

export default schema;
