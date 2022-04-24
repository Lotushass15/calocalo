<template>
  <h1>ログインフォーム</h1>
  <Form :validation-schema="userValid">
    <div>
      <label>氏名</label>
      <Field name="name" type="text" />
      <div><ErrorMessage name="name"/></div>
      <label>メール</label>
      <Field name="email" type="email" />
      <div><ErrorMessage name="email" /></div>
    </div>
  </Form>
</template>

<script>
import {Field, Form, ErrorMessage} from 'vee-validate';
import * as yup from "yup";

export default {
  name: "ChildComp3",
  props: { msg: String},
  components: {
    Field, Form, ErrorMessage,
  },
  data: function() {
    return {
      userValid: {
        name: yup.string().required(),
        email: yup.string().required().email(),
      },
    }
  },
}
</script>
  
<style>

</style>
