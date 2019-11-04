import React from "react";
import {shallow} from "enzyme";
import App from "./App";

import setupTests from './setupTest.js';
import tempPolyfills from './tempPolyfills';

describe("App", () => {

    const app = shallow(<App/>);

    it("renders App correctly", () => {
        expect(app).toMatchSnapshot();
    });

    it("initializes the `state` with empty list of gifts", () => {
        expect(app.state().gifts).toEqual([]);
    });

    describe("when clicking the `add-gift` button", () => {

        beforeEach(() => {
            app.find(".btn-add").simulate("click");
        });

        afterEach(() => {
           app.setState({ gifts: []});
        });

        it("it adds a new gift to `state`", () => {
            expect(app.state().gifts).toEqual([{id: 1}]);
        });

        it("it adds a new gift to the render list", () => {
            expect(app.find(".gift-list").children().length).toEqual(1);
        });

    });

});

