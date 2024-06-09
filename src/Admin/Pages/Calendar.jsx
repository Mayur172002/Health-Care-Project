import React from 'react'
import Admin_header from '../Componest/Admin_header'
import { Helmet } from 'react-helmet'

function Calendar() {
    return (
        <div>
            <Helmet>
     <link rel="stylesheet" type="text/css" href="Admin/css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="Admin/css/font-awesome.min.css"/>
    <link rel="stylesheet" type="text/css" href="Admin/css/fullcalendar.min.css"/>
    <link rel="stylesheet" type="text/css" href="Admin/css/select2.min.css"/>
    <link rel="stylesheet" type="text/css" href="Admin/css/bootstrap-datetimepicker.min.css"/>
    <link rel="stylesheet" type="text/css" href="Admin/css/style.css"/>
            </Helmet>
            <div class="main-wrapper">
            <Admin_header />
                <div className="page-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-sm-8 col-4">
                                <h4 className="page-title">Calendar</h4>
                            </div>
                            <div className="col-sm-4 col-8 text-right m-b-30">
                                <a href="#" className="btn btn-primary btn-rounded" data-toggle="modal" data-target="#add_event"><i className="fa fa-plus" /> Add Event</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card-box mb-0">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div id="calendar" />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal fade none-border" id="event-modal">
                                    <div className="modal-dialog">
                                        <div className="modal-content modal-md">
                                            <div className="modal-header">
                                                <h4 className="modal-title">Add Event</h4>
                                                <button type="button" className="close" data-dismiss="modal">×</button>
                                            </div>
                                            <div className="modal-body" />
                                            <div className="modal-footer text-center">
                                                <button type="button" className="btn btn-primary submit-btn save-event">Create event</button>
                                                <button type="button" className="btn btn-danger btn-lg delete-event" data-dismiss="modal">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div id="add_event" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content modal-md">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Event</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>Event Name <span className="text-danger">*</span></label>
                                        <input className="form-control" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label>Event Date <span className="text-danger">*</span></label>
                                        <div className="cal-icon">
                                            <input className="form-control datetimepicker" type="text" />
                                        </div>
                                    </div>
                                    <div className="m-t-20 text-center">
                                        <button className="btn btn-primary submit-btn">Create Event</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    <Helmet>
    <script src="Admin/js/select2.min.js"></script>
    <script src="Admin/js/moment.min.js"></script>
    <script src="Admin/js/jquery-ui.min.html"></script>
    <script src="Admin/js/fullcalendar.min.js"></script>
    <script src="Admin/js/jquery.fullcalendar.js"></script>
    <script src="Admin/js/bootstrap-datetimepicker.min.js"></script>
    </Helmet>
        </div>
    )
}

export default Calendar