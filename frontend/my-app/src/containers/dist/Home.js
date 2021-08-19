"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var sweetalert2_1 = require("sweetalert2");
var baseTicket_1 = require("../components/baseTicket");
var Home = function () {
    var _a = react_1.useState([]), tickets = _a[0], setTickets = _a[1];
    var _b = react_1.useState(''), selectedStatus = _b[0], setSelectedStatus = _b[1];
    react_1.useEffect(function () {
        axios_1["default"].get("http://localhost:3001/tickets").then(function (res) {
            setTickets(res.data);
        });
    }, []);
    var onUpdateStatus = function (ticket, status) {
        var tempTicket = ticket;
        tempTicket.updated_date = Date.now().toString();
        tempTicket.status = status;
        axios_1["default"].put("http://localhost:3001/tickets/update/" + ticket._id, tempTicket).then(function (res) {
            if (res.data.error) {
                throw new Error(res.data.error.message);
            }
            sweetalert2_1["default"].fire({
                icon: 'success',
                title: res.data.success.message
            }).then(function () {
                axios_1["default"].get("http://localhost:3001/tickets").then(function (res) {
                    setTickets(res.data);
                });
            });
        })["catch"](function (err) {
            console.log(err);
            sweetalert2_1["default"].fire({
                icon: 'error',
                title: err.message
            });
        });
    };
    var renderTickets = function () {
        var ticketArr = [];
        tickets.map(function (ticket) {
            return ticketArr.push(React.createElement(baseTicket_1["default"], { key: ticket._id, ticket: ticket, onUpdateStatus: onUpdateStatus }));
        });
        return ticketArr;
    };
    return (React.createElement("div", { className: "home" },
        React.createElement("div", { className: "home--heading" },
            React.createElement("h1", { className: "home--heading__text" }, "Ticket"),
            React.createElement("div", { className: "home--heading__groupButton" },
                React.createElement("div", { className: "home--heading__selectInput" },
                    React.createElement("label", { htmlFor: "status" }, "Select status : "),
                    React.createElement("input", { list: "statusList", name: "status", id: "status" }),
                    React.createElement("datalist", { id: "statusList" },
                        React.createElement("option", { value: "Pending" }),
                        React.createElement("option", { value: "Approve" }),
                        React.createElement("option", { value: "Resolved" }),
                        React.createElement("option", { value: "Rejected" }))),
                React.createElement(react_router_dom_1.Link, { to: '/new-ticket', className: "home--heading__link" },
                    React.createElement("h3", null, "New Ticket")))),
        React.createElement("div", { className: "home--content" }, tickets && renderTickets())));
};
exports["default"] = Home;
