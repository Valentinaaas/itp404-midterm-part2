import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  firstName(i) {
    return faker.name.firstName();
    },
  lastName(i) {
    return faker.name.lastName();
  },
  jobTitle(i) {
    return faker.name.jobTitle();
  },
  phoneNumber(i) {
    return faker.phone.phoneNumber();
  },
  id() {
  return faker.helpers.slugify(`${this.firstName} ${this.lastName}`);
  //I don't really know where this goes, im assuming here
}
});
