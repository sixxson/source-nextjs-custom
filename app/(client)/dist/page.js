"use client";
"use strict";
exports.__esModule = true;
var Banner_1 = require("@/components/global/Banner/Banner");
var useMenuSpy_1 = require("../../hooks/help/useMenuSpy");
function Page() {
    useMenuSpy_1.useMenuSpy();
    return (React.createElement(React.Fragment, null,
        React.createElement(Banner_1["default"], null)));
}
exports["default"] = Page;
