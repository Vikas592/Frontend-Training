import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required().min(3),
  sport: yup.string().required(),
  part: yup.string().required(),
});

export default schema;
