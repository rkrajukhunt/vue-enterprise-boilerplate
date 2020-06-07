import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@views/home.vue";

// eslint-disable-next-line no-undef
describe("home.vue", () => {
  // eslint-disable-next-line no-undef
  it("renders props.msg when passed", () => {
    const msg = "Home Page";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
