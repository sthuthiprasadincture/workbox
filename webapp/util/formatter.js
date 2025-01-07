sap.ui.define([], () => {
    "use strict";

    return {
        state: function (e) {

            if ( e === "Return ELDC Received" || e === "Return Dispatched" || e === "Return Authorised" ) {
                return "Information";
            } else if (e === "CN Approved"  || e === "CN Issued" || e === "Approved" || e === "Return Confirmed") {
                return "Success";
            } else if (e === "Rejected POD" || e === "Rejected" ) {
                return "Error";
            }
            else if (e === "Return in Process" || e === "In Approval" || e === "In Approval - Deviation" || e === "Pending for Reconciliation" || e === "Awaiting POD" || e === "POD Review" ) {
                return "Warning";
            }
            else {
                return "None";
            }
        },

        // wbMytaskCount: function (currentViewPageName, inboxType, count, WB_TASK_BOARD_VIEW) {
        //     var text = "Task List";
        //     if (!currentViewPageName) {
        //         text = this.getModel("i18n").getResourceBundle().getText("MY_TASKS_TEXT");
        //     }
        //     if (inboxType !== "PinnedTasks" && !WB_TASK_BOARD_VIEW) {
        //         if (count && inboxType != "AdminInbox") {
        //             text = text + "  (" + count + ")";
        //         }
        //     }
        //     return text;
        // },
        // wbAdmintaskCount: function (currentViewPageName, inboxType, count, WB_TASK_BOARD_VIEW) {
        //     var text = "Admin Inbox";
            
        //     if (count && inboxType === "AdminInbox") {
        //         text = text + "  (" + count + ")";
        //     }
            
        //     return text;
        // },

        wbSetPaginationItems: function (pages) {
            return Array.isArray(pages) && pages.length > 0;
        },
        
        wbSetLinkStyleClass: function (page, currentPage) {
            if (page === currentPage) {
                return page;
            }
        }
    };
});