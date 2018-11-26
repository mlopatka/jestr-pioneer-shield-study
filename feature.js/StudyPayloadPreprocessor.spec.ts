import { assert } from "chai";
import {
  NavigationBatch,
  OpenWPMType,
  StudyPayloadEnvelope,
  StudyPayloadPreprocessor,
} from "./StudyPayloadPreprocessor";
import { parseIsoDateTimeString } from "./dateUtils";
import { addSeconds } from "date-fns";

describe("StudyPayloadPreprocessor", function() {
  it("should exist", function() {
    const studyPayloadPreprocessor = new StudyPayloadPreprocessor();
    assert.isNotEmpty(studyPayloadPreprocessor);
  });

  const firstVisitIsoDateTimeString = "2018-11-23T01:34:40.475Z";
  // const secondVisitIsoDateTimeString = "2018-11-23T01:34:45.488Z";
  const firstVisitDateTime = parseIsoDateTimeString(
    firstVisitIsoDateTimeString,
  );
  /*
  const secondVisitDateTime = parseIsoDateTimeString(
    secondVisitIsoDateTimeString,
  );
  */

  describe("Example.com visit", function() {
    const exampleDotComVisitQueue: StudyPayloadEnvelope[] = [
      {
        type: "http_requests" as OpenWPMType,
        httpRequest: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 1,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "20",
          url: "http://example.com/",
          method: "GET",
          time_stamp: "2018-11-23T01:34:40.487Z",
          referrer: "",
          headers:
            '[["Host","example.com"],["User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"],["Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"],["Accept-Language","en-US,en;q=0.5"],["Accept-Encoding","gzip, deflate"],["Connection","keep-alive"],["Upgrade-Insecure-Requests","1"]]',
          is_XHR: 0,
          is_full_page: 1,
          is_frame_load: 0,
          triggering_origin: "undefined",
          loading_origin: "undefined",
          loading_href: "undefined",
          resource_type: "main_frame",
          top_level_url: "about:blank",
          parent_frame_id: -1,
          frame_ancestors: "[]",
        },
        tabActiveDwellTime: 7750,
      },
      {
        type: "navigations" as OpenWPMType,
        navigation: {
          crawl_id: 0,
          incognito: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          window_width: 1280,
          window_height: 946,
          window_type: "normal",
          tab_width: 1280,
          tab_height: 872,
          tab_cookie_store_id: "firefox-default",
          uuid: "290cb5b2-828c-4eec-9626-69463b7b4d05",
          url: "http://example.com/",
          transition_qualifiers: '["from_address_bar"]',
          transition_type: "typed",
          committed_event_ordinal: 2,
          committed_time_stamp: "2018-11-23T01:34:40.769Z",
          parent_frame_id: -1,
          before_navigate_event_ordinal: 0,
          before_navigate_time_stamp: "2018-11-23T01:34:40.475Z",
        },
        tabActiveDwellTime: 8250,
      },
      {
        type: "http_responses" as OpenWPMType,
        httpResponse: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 3,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "20",
          is_cached: 0,
          url: "http://example.com/",
          method: "GET",
          response_status: 200,
          response_status_text: "HTTP/1.1 200 OK",
          time_stamp: "2018-11-23T01:34:40.765Z",
          headers:
            '[["Content-Encoding","gzip"],["Accept-Ranges","bytes"],["Cache-Control","max-age=604800"],["Content-Type","text/html; charset=UTF-8"],["Date","Fri, 23 Nov 2018 01:34:40 GMT"],["Etag","\\"1541025663\\""],["Expires","Fri, 30 Nov 2018 01:34:40 GMT"],["Last-Modified","Fri, 09 Aug 2013 23:54:35 GMT"],["Server","ECS (lga/1390)"],["Vary","Accept-Encoding"],["X-Cache","HIT"],["Content-Length","606"]]',
          location: "",
        },
        tabActiveDwellTime: 8250,
      },
      {
        type: "http_requests" as OpenWPMType,
        httpRequest: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 4,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "21",
          url: "http://example.com/favicon.ico",
          method: "GET",
          time_stamp: "2018-11-23T01:34:40.846Z",
          referrer: "",
          headers:
            '[["Host","example.com"],["User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"],["Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"],["Accept-Language","en-US,en;q=0.5"],["Accept-Encoding","gzip, deflate"],["Connection","keep-alive"]]',
          is_XHR: 0,
          is_full_page: 1,
          is_frame_load: 0,
          triggering_origin: "http://example.com",
          loading_origin: "http://example.com",
          loading_href: "http://example.com/",
          resource_type: "image",
          top_level_url: "http://example.com/",
          parent_frame_id: -1,
          frame_ancestors: "[]",
        },
        tabActiveDwellTime: 8250,
      },
      {
        type: "http_responses" as OpenWPMType,
        httpResponse: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 5,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "21",
          is_cached: 0,
          url: "http://example.com/favicon.ico",
          method: "GET",
          response_status: 404,
          response_status_text: "HTTP/1.1 404 Not Found",
          time_stamp: "2018-11-23T01:34:40.982Z",
          headers:
            '[["Content-Encoding","gzip"],["Accept-Ranges","bytes"],["Cache-Control","max-age=604800"],["Content-Type","text/html; charset=UTF-8"],["Date","Fri, 23 Nov 2018 01:34:40 GMT"],["Expires","Fri, 30 Nov 2018 01:34:40 GMT"],["Last-Modified","Fri, 16 Nov 2018 21:05:05 GMT"],["Server","ECS (lga/1391)"],["Vary","Accept-Encoding"],["X-Cache","404-HIT"],["Content-Length","606"]]',
          location: "",
        },
        tabActiveDwellTime: 8250,
      },
    ];
    const studyPayloadPreprocessor = new StudyPayloadPreprocessor();
    exampleDotComVisitQueue.map(
      (studyPayloadEnvelope: StudyPayloadEnvelope) => {
        if (studyPayloadPreprocessor.shouldBeBatched(studyPayloadEnvelope)) {
          studyPayloadPreprocessor.queueForProcessing(studyPayloadEnvelope);
        }
      },
    );

    describe("Queue processing 5 seconds after the visit", function() {
      const nowDateTime = addSeconds(firstVisitDateTime, 5);
      it("should not yield any navigation batches to send", async function() {
        studyPayloadPreprocessor.navigationBatchSendQueue = [];
        await studyPayloadPreprocessor.processQueue(nowDateTime);
        assert.equal(
          studyPayloadPreprocessor.navigationBatchSendQueue.length,
          0,
        );
      });
    });

    describe("Queue processing 20 seconds after the visit", function() {
      const nowDateTime = addSeconds(firstVisitDateTime, 20);
      it("should yield relevant navigation batches to send", async function() {
        studyPayloadPreprocessor.navigationBatchSendQueue = [];
        await studyPayloadPreprocessor.processQueue(nowDateTime);
        assert.equal(
          studyPayloadPreprocessor.studyPayloadEnvelopeProcessQueue.length,
          0,
        );
        assert.equal(
          studyPayloadPreprocessor.navigationBatchSendQueue.length,
          1,
        );
        const firstNavigationBatch: NavigationBatch =
          studyPayloadPreprocessor.navigationBatchSendQueue[0];
        assert.equal(firstNavigationBatch.childEnvelopes.length, 4);
        assert.equal(firstNavigationBatch.httpRequestCount, 2);
        assert.equal(firstNavigationBatch.httpResponseCount, 2);
        assert.equal(firstNavigationBatch.httpRedirectCount, 0);
        assert.equal(firstNavigationBatch.javascriptOperationCount, 0);
      });
    });
  });

  describe("Example.com visit followed by 'More information' link click", function() {
    const exampleDotComVisitFollowedByMoreInformationLinkClickQueue = [
      {
        type: "http_requests" as OpenWPMType,
        httpRequest: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 1,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "20",
          url: "http://example.com/",
          method: "GET",
          time_stamp: "2018-11-23T01:34:40.487Z",
          referrer: "",
          headers:
            '[["Host","example.com"],["User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"],["Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"],["Accept-Language","en-US,en;q=0.5"],["Accept-Encoding","gzip, deflate"],["Connection","keep-alive"],["Upgrade-Insecure-Requests","1"]]',
          is_XHR: 0,
          is_full_page: 1,
          is_frame_load: 0,
          triggering_origin: "undefined",
          loading_origin: "undefined",
          loading_href: "undefined",
          resource_type: "main_frame",
          top_level_url: "about:blank",
          parent_frame_id: -1,
          frame_ancestors: "[]",
        },
        tabActiveDwellTime: 7750,
      },
      {
        type: "navigations" as OpenWPMType,
        navigation: {
          crawl_id: 0,
          incognito: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          window_width: 1280,
          window_height: 946,
          window_type: "normal",
          tab_width: 1280,
          tab_height: 872,
          tab_cookie_store_id: "firefox-default",
          uuid: "290cb5b2-828c-4eec-9626-69463b7b4d05",
          url: "http://example.com/",
          transition_qualifiers: '["from_address_bar"]',
          transition_type: "typed",
          committed_event_ordinal: 2,
          committed_time_stamp: "2018-11-23T01:34:40.769Z",
          parent_frame_id: -1,
          before_navigate_event_ordinal: 0,
          before_navigate_time_stamp: "2018-11-23T01:34:40.475Z",
        },
        tabActiveDwellTime: 8250,
      },
      {
        type: "http_responses" as OpenWPMType,
        httpResponse: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 3,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "20",
          is_cached: 0,
          url: "http://example.com/",
          method: "GET",
          response_status: 200,
          response_status_text: "HTTP/1.1 200 OK",
          time_stamp: "2018-11-23T01:34:40.765Z",
          headers:
            '[["Content-Encoding","gzip"],["Accept-Ranges","bytes"],["Cache-Control","max-age=604800"],["Content-Type","text/html; charset=UTF-8"],["Date","Fri, 23 Nov 2018 01:34:40 GMT"],["Etag","\\"1541025663\\""],["Expires","Fri, 30 Nov 2018 01:34:40 GMT"],["Last-Modified","Fri, 09 Aug 2013 23:54:35 GMT"],["Server","ECS (lga/1390)"],["Vary","Accept-Encoding"],["X-Cache","HIT"],["Content-Length","606"]]',
          location: "",
        },
        tabActiveDwellTime: 8250,
      },
      {
        type: "http_requests" as OpenWPMType,
        httpRequest: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 4,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "21",
          url: "http://example.com/favicon.ico",
          method: "GET",
          time_stamp: "2018-11-23T01:34:40.846Z",
          referrer: "",
          headers:
            '[["Host","example.com"],["User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"],["Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"],["Accept-Language","en-US,en;q=0.5"],["Accept-Encoding","gzip, deflate"],["Connection","keep-alive"]]',
          is_XHR: 0,
          is_full_page: 1,
          is_frame_load: 0,
          triggering_origin: "http://example.com",
          loading_origin: "http://example.com",
          loading_href: "http://example.com/",
          resource_type: "image",
          top_level_url: "http://example.com/",
          parent_frame_id: -1,
          frame_ancestors: "[]",
        },
        tabActiveDwellTime: 8250,
      },
      {
        type: "http_responses" as OpenWPMType,
        httpResponse: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 5,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "21",
          is_cached: 0,
          url: "http://example.com/favicon.ico",
          method: "GET",
          response_status: 404,
          response_status_text: "HTTP/1.1 404 Not Found",
          time_stamp: "2018-11-23T01:34:40.982Z",
          headers:
            '[["Content-Encoding","gzip"],["Accept-Ranges","bytes"],["Cache-Control","max-age=604800"],["Content-Type","text/html; charset=UTF-8"],["Date","Fri, 23 Nov 2018 01:34:40 GMT"],["Expires","Fri, 30 Nov 2018 01:34:40 GMT"],["Last-Modified","Fri, 16 Nov 2018 21:05:05 GMT"],["Server","ECS (lga/1391)"],["Vary","Accept-Encoding"],["X-Cache","404-HIT"],["Content-Length","606"]]',
          location: "",
        },
        tabActiveDwellTime: 8250,
      },
      {
        type: "http_requests" as OpenWPMType,
        httpRequest: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 7,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "22",
          url: "http://www.iana.org/domains/example",
          method: "GET",
          time_stamp: "2018-11-23T01:34:45.493Z",
          referrer: "http://example.com/",
          headers:
            '[["Host","www.iana.org"],["User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"],["Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"],["Accept-Language","en-US,en;q=0.5"],["Accept-Encoding","gzip, deflate"],["Referer","http://example.com/"],["Connection","keep-alive"],["Upgrade-Insecure-Requests","1"]]',
          is_XHR: 0,
          is_full_page: 1,
          is_frame_load: 0,
          triggering_origin: "http://example.com",
          loading_origin: "undefined",
          loading_href: "undefined",
          resource_type: "main_frame",
          top_level_url: "http://example.com/",
          parent_frame_id: -1,
          frame_ancestors: "[]",
        },
        tabActiveDwellTime: 12750,
      },
      {
        type: "http_redirects" as OpenWPMType,
        httpRedirect: {
          incognito: 0,
          crawl_id: 0,
          old_request_url: "http://www.iana.org/domains/example",
          old_request_id: "22",
          new_request_url: "https://www.iana.org/domains/reserved",
          new_request_id: null,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 8,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          response_status: 302,
          response_status_text: "HTTP/1.1 302 Found",
          time_stamp: "2018-11-23T01:34:45.870Z",
        },
        tabActiveDwellTime: 13250,
      },
      {
        type: "http_requests" as OpenWPMType,
        httpRequest: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 9,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "22",
          url: "https://www.iana.org/domains/reserved",
          method: "GET",
          time_stamp: "2018-11-23T01:34:45.874Z",
          referrer: "http://example.com/",
          headers:
            '[["Host","www.iana.org"],["User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"],["Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"],["Accept-Language","en-US,en;q=0.5"],["Accept-Encoding","gzip, deflate, br"],["Referer","http://example.com/"],["Connection","keep-alive"],["Upgrade-Insecure-Requests","1"]]',
          is_XHR: 0,
          is_full_page: 1,
          is_frame_load: 0,
          triggering_origin: "http://example.com",
          loading_origin: "undefined",
          loading_href: "undefined",
          resource_type: "main_frame",
          top_level_url: "http://example.com/",
          parent_frame_id: -1,
          frame_ancestors: "[]",
        },
        tabActiveDwellTime: 13250,
      },
      {
        type: "navigations" as OpenWPMType,
        navigation: {
          crawl_id: 0,
          incognito: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          window_width: 1280,
          window_height: 946,
          window_type: "normal",
          tab_width: 1280,
          tab_height: 872,
          tab_cookie_store_id: "firefox-default",
          uuid: "bd1e0e8e-6c72-4a93-983b-d59c336b4472",
          url: "https://www.iana.org/domains/reserved",
          transition_qualifiers: '["server_redirect"]',
          transition_type: "link",
          committed_event_ordinal: 10,
          committed_time_stamp: "2018-11-23T01:34:46.962Z",
          parent_frame_id: -1,
          before_navigate_event_ordinal: 6,
          before_navigate_time_stamp: "2018-11-23T01:34:45.488Z",
        },
        tabActiveDwellTime: 14250,
      },
      {
        type: "http_requests" as OpenWPMType,
        httpRequest: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 11,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "24",
          url: "https://www.iana.org/_css/2015.1/screen.css",
          method: "GET",
          time_stamp: "2018-11-23T01:34:46.984Z",
          referrer: "https://www.iana.org/domains/reserved",
          headers:
            '[["Host","www.iana.org"],["User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"],["Accept","text/css,*/*;q=0.1"],["Accept-Language","en-US,en;q=0.5"],["Accept-Encoding","gzip, deflate, br"],["Referer","https://www.iana.org/domains/reserved"],["Connection","keep-alive"]]',
          is_XHR: 0,
          is_full_page: 1,
          is_frame_load: 0,
          triggering_origin: "https://www.iana.org",
          loading_origin: "https://www.iana.org",
          loading_href: "https://www.iana.org/domains/reserved",
          resource_type: "stylesheet",
          top_level_url: "https://www.iana.org/domains/reserved",
          parent_frame_id: -1,
          frame_ancestors: "[]",
        },
        tabActiveDwellTime: 14250,
      },
      {
        type: "http_requests" as OpenWPMType,
        httpRequest: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 12,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "25",
          url: "https://www.iana.org/_css/2015.1/print.css",
          method: "GET",
          time_stamp: "2018-11-23T01:34:46.985Z",
          referrer: "https://www.iana.org/domains/reserved",
          headers:
            '[["Host","www.iana.org"],["User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"],["Accept","text/css,*/*;q=0.1"],["Accept-Language","en-US,en;q=0.5"],["Accept-Encoding","gzip, deflate, br"],["Referer","https://www.iana.org/domains/reserved"],["Connection","keep-alive"]]',
          is_XHR: 0,
          is_full_page: 1,
          is_frame_load: 0,
          triggering_origin: "https://www.iana.org",
          loading_origin: "https://www.iana.org",
          loading_href: "https://www.iana.org/domains/reserved",
          resource_type: "stylesheet",
          top_level_url: "https://www.iana.org/domains/reserved",
          parent_frame_id: -1,
          frame_ancestors: "[]",
        },
        tabActiveDwellTime: 14250,
      },
      {
        type: "http_requests" as OpenWPMType,
        httpRequest: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 13,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "26",
          url: "https://www.iana.org/_js/2013.1/jquery.js",
          method: "GET",
          time_stamp: "2018-11-23T01:34:46.986Z",
          referrer: "https://www.iana.org/domains/reserved",
          headers:
            '[["Host","www.iana.org"],["User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"],["Accept","*/*"],["Accept-Language","en-US,en;q=0.5"],["Accept-Encoding","gzip, deflate, br"],["Referer","https://www.iana.org/domains/reserved"],["Connection","keep-alive"]]',
          is_XHR: 0,
          is_full_page: 1,
          is_frame_load: 0,
          triggering_origin: "https://www.iana.org",
          loading_origin: "https://www.iana.org",
          loading_href: "https://www.iana.org/domains/reserved",
          resource_type: "script",
          top_level_url: "https://www.iana.org/domains/reserved",
          parent_frame_id: -1,
          frame_ancestors: "[]",
        },
        tabActiveDwellTime: 14250,
      },
      {
        type: "http_requests" as OpenWPMType,
        httpRequest: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 14,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "27",
          url: "https://www.iana.org/_js/2013.1/iana.js",
          method: "GET",
          time_stamp: "2018-11-23T01:34:46.987Z",
          referrer: "https://www.iana.org/domains/reserved",
          headers:
            '[["Host","www.iana.org"],["User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"],["Accept","*/*"],["Accept-Language","en-US,en;q=0.5"],["Accept-Encoding","gzip, deflate, br"],["Referer","https://www.iana.org/domains/reserved"],["Connection","keep-alive"]]',
          is_XHR: 0,
          is_full_page: 1,
          is_frame_load: 0,
          triggering_origin: "https://www.iana.org",
          loading_origin: "https://www.iana.org",
          loading_href: "https://www.iana.org/domains/reserved",
          resource_type: "script",
          top_level_url: "https://www.iana.org/domains/reserved",
          parent_frame_id: -1,
          frame_ancestors: "[]",
        },
        tabActiveDwellTime: 14250,
      },
      {
        type: "http_requests" as OpenWPMType,
        httpRequest: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 15,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "28",
          url: "https://www.iana.org/_img/2013.1/iana-logo-header.svg",
          method: "GET",
          time_stamp: "2018-11-23T01:34:47.001Z",
          referrer: "https://www.iana.org/domains/reserved",
          headers:
            '[["Host","www.iana.org"],["User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"],["Accept","image/webp,*/*"],["Accept-Language","en-US,en;q=0.5"],["Accept-Encoding","gzip, deflate, br"],["Referer","https://www.iana.org/domains/reserved"],["Connection","keep-alive"]]',
          is_XHR: 0,
          is_full_page: 1,
          is_frame_load: 0,
          triggering_origin: "https://www.iana.org",
          loading_origin: "https://www.iana.org",
          loading_href: "https://www.iana.org/domains/reserved",
          resource_type: "image",
          top_level_url: "https://www.iana.org/domains/reserved",
          parent_frame_id: -1,
          frame_ancestors: "[]",
        },
        tabActiveDwellTime: 14250,
      },
      {
        type: "http_responses" as OpenWPMType,
        httpResponse: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 16,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "22",
          is_cached: 0,
          url: "https://www.iana.org/domains/reserved",
          method: "GET",
          response_status: 200,
          response_status_text: "HTTP/1.1 200 OK",
          time_stamp: "2018-11-23T01:34:47.127Z",
          headers:
            '[["Date","Fri, 23 Nov 2018 01:19:53 GMT"],["X-Frame-Options","SAMEORIGIN"],["Referrer-Policy","origin-when-cross-origin"],["Content-Security-Policy","upgrade-insecure-requests"],["Vary","Accept-Encoding"],["Content-Length","3155"],["Content-Encoding","gzip"],["Last-Modified","Tue, 21 Jul 2015 00:49:48 GMT"],["Cache-control","public, s-maxage=900, max-age=7202"],["Expires","Fri, 23 Nov 2018 03:19:53 GMT"],["Content-Type","text/html; charset=UTF-8"],["Server","Apache"],["Strict-Transport-Security","max-age=48211200; preload"],["X-Cache-Hits","131"],["Accept-Ranges","bytes"],["Connection","keep-alive"]]',
          location: "",
        },
        tabActiveDwellTime: 14500,
      },
      {
        type: "http_responses" as OpenWPMType,
        httpResponse: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 17,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "24",
          is_cached: 0,
          url: "https://www.iana.org/_css/2015.1/screen.css",
          method: "GET",
          response_status: 200,
          response_status_text: "HTTP/1.1 200 OK",
          time_stamp: "2018-11-23T01:34:47.305Z",
          headers:
            '[["Date","Fri, 23 Nov 2018 01:15:57 GMT"],["X-Frame-Options","SAMEORIGIN"],["Referrer-Policy","origin-when-cross-origin"],["Content-Security-Policy","upgrade-insecure-requests"],["Vary","Accept-Encoding"],["Content-Length","9189"],["Content-Encoding","gzip"],["Last-Modified","Thu, 24 May 2018 19:40:12 GMT"],["Cache-control","public, s-maxage=1800, max-age=7205"],["Expires","Fri, 30 Nov 2018 01:15:57 GMT"],["Content-Type","text/css"],["Server","Apache"],["Strict-Transport-Security","max-age=48211200; preload"],["X-Cache-Hits","169"],["Accept-Ranges","bytes"],["Connection","keep-alive"]]',
          location: "",
        },
        tabActiveDwellTime: 14500,
      },
      {
        type: "http_responses" as OpenWPMType,
        httpResponse: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 18,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "25",
          is_cached: 0,
          url: "https://www.iana.org/_css/2015.1/print.css",
          method: "GET",
          response_status: 200,
          response_status_text: "HTTP/1.1 200 OK",
          time_stamp: "2018-11-23T01:34:47.554Z",
          headers:
            '[["Date","Fri, 23 Nov 2018 01:13:22 GMT"],["X-Frame-Options","SAMEORIGIN"],["Referrer-Policy","origin-when-cross-origin"],["Content-Security-Policy","upgrade-insecure-requests"],["Vary","Accept-Encoding"],["Content-Length","7661"],["Content-Encoding","gzip"],["Last-Modified","Sat, 01 Oct 2016 16:44:02 GMT"],["Cache-control","public, s-maxage=1800, max-age=7205"],["Expires","Fri, 30 Nov 2018 01:13:22 GMT"],["Content-Type","text/css"],["Server","Apache"],["Strict-Transport-Security","max-age=48211200; preload"],["X-Cache-Hits","173"],["Accept-Ranges","bytes"],["Connection","keep-alive"]]',
          location: "",
        },
        tabActiveDwellTime: 14750,
      },
      {
        type: "http_responses" as OpenWPMType,
        httpResponse: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 19,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "27",
          is_cached: 0,
          url: "https://www.iana.org/_js/2013.1/iana.js",
          method: "GET",
          response_status: 200,
          response_status_text: "HTTP/1.1 200 OK",
          time_stamp: "2018-11-23T01:34:47.576Z",
          headers:
            '[["Date","Thu, 22 Nov 2018 09:27:09 GMT"],["Expires","Thu, 29 Nov 2018 09:27:09 GMT"],["Vary","Accept-Encoding"],["X-Frame-Options","SAMEORIGIN"],["Referrer-Policy","origin-when-cross-origin"],["Content-Security-Policy","upgrade-insecure-requests"],["Last-Modified","Mon, 08 Aug 2016 18:14:43 GMT"],["Cache-control","public, s-maxage=1800, max-age=7205"],["Content-Encoding","gzip"],["Content-Type","application/javascript"],["Server","Apache"],["Strict-Transport-Security","max-age=48211200; preload"],["X-Cache-Hits","13770"],["Accept-Ranges","bytes"],["Content-Length","81"],["Connection","keep-alive"]]',
          location: "",
        },
        tabActiveDwellTime: 14750,
      },
      {
        type: "http_responses" as OpenWPMType,
        httpResponse: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 20,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "26",
          is_cached: 0,
          url: "https://www.iana.org/_js/2013.1/jquery.js",
          method: "GET",
          response_status: 200,
          response_status_text: "HTTP/1.1 200 OK",
          time_stamp: "2018-11-23T01:34:47.726Z",
          headers:
            '[["Date","Fri, 23 Nov 2018 01:17:14 GMT"],["X-Frame-Options","SAMEORIGIN"],["Referrer-Policy","origin-when-cross-origin"],["Content-Security-Policy","upgrade-insecure-requests"],["Vary","Accept-Encoding"],["Content-Length","32980"],["Content-Encoding","gzip"],["Last-Modified","Mon, 22 Apr 2013 18:18:55 GMT"],["Cache-control","public, s-maxage=1800, max-age=7205"],["Expires","Fri, 30 Nov 2018 01:17:14 GMT"],["Content-Type","application/javascript"],["Server","Apache"],["Strict-Transport-Security","max-age=48211200; preload"],["X-Cache-Hits","176"],["Accept-Ranges","bytes"],["Connection","keep-alive"]]',
          location: "",
        },
        tabActiveDwellTime: 15000,
      },
      {
        type: "http_requests" as OpenWPMType,
        httpRequest: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 21,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "29",
          url: "https://www.iana.org/_img/2015.1/fonts/NotoSans-Regular.woff",
          method: "GET",
          time_stamp: "2018-11-23T01:34:47.779Z",
          referrer: "https://www.iana.org/_css/2015.1/screen.css",
          headers:
            '[["Host","www.iana.org"],["User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"],["Accept","application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8"],["Accept-Language","en-US,en;q=0.5"],["Accept-Encoding","gzip, deflate, br"],["Referer","https://www.iana.org/_css/2015.1/screen.css"],["Connection","keep-alive"]]',
          is_XHR: 0,
          is_full_page: 1,
          is_frame_load: 0,
          triggering_origin: "https://www.iana.org",
          loading_origin: "https://www.iana.org",
          loading_href: "https://www.iana.org/domains/reserved",
          resource_type: "font",
          top_level_url: "https://www.iana.org/domains/reserved",
          parent_frame_id: -1,
          frame_ancestors: "[]",
        },
        tabActiveDwellTime: 15000,
      },
      {
        type: "http_requests" as OpenWPMType,
        httpRequest: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 22,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "30",
          url: "https://www.iana.org/_img/2015.1/fonts/NotoSans-Bold.woff",
          method: "GET",
          time_stamp: "2018-11-23T01:34:47.789Z",
          referrer: "https://www.iana.org/_css/2015.1/screen.css",
          headers:
            '[["Host","www.iana.org"],["User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"],["Accept","application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8"],["Accept-Language","en-US,en;q=0.5"],["Accept-Encoding","gzip, deflate, br"],["Referer","https://www.iana.org/_css/2015.1/screen.css"],["Connection","keep-alive"]]',
          is_XHR: 0,
          is_full_page: 1,
          is_frame_load: 0,
          triggering_origin: "https://www.iana.org",
          loading_origin: "https://www.iana.org",
          loading_href: "https://www.iana.org/domains/reserved",
          resource_type: "font",
          top_level_url: "https://www.iana.org/domains/reserved",
          parent_frame_id: -1,
          frame_ancestors: "[]",
        },
        tabActiveDwellTime: 15000,
      },
      {
        type: "http_requests" as OpenWPMType,
        httpRequest: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 23,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "31",
          url:
            "https://www.iana.org/_img/2015.1/fonts/SourceCodePro-Regular.woff",
          method: "GET",
          time_stamp: "2018-11-23T01:34:47.794Z",
          referrer: "https://www.iana.org/_css/2015.1/screen.css",
          headers:
            '[["Host","www.iana.org"],["User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"],["Accept","application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8"],["Accept-Language","en-US,en;q=0.5"],["Accept-Encoding","gzip, deflate, br"],["Referer","https://www.iana.org/_css/2015.1/screen.css"],["Connection","keep-alive"]]',
          is_XHR: 0,
          is_full_page: 1,
          is_frame_load: 0,
          triggering_origin: "https://www.iana.org",
          loading_origin: "https://www.iana.org",
          loading_href: "https://www.iana.org/domains/reserved",
          resource_type: "font",
          top_level_url: "https://www.iana.org/domains/reserved",
          parent_frame_id: -1,
          frame_ancestors: "[]",
        },
        tabActiveDwellTime: 15000,
      },
      {
        type: "http_responses" as OpenWPMType,
        httpResponse: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 24,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "28",
          is_cached: 0,
          url: "https://www.iana.org/_img/2013.1/iana-logo-header.svg",
          method: "GET",
          response_status: 200,
          response_status_text: "HTTP/1.1 200 OK",
          time_stamp: "2018-11-23T01:34:48.073Z",
          headers:
            '[["Date","Thu, 22 Nov 2018 10:12:40 GMT"],["Last-Modified","Fri, 04 Jan 2013 01:17:14 GMT"],["Vary","Accept-Encoding"],["Expires","Thu, 29 Nov 2018 10:12:40 GMT"],["X-Frame-Options","SAMEORIGIN"],["Referrer-Policy","origin-when-cross-origin"],["Content-Security-Policy","upgrade-insecure-requests"],["Content-Length","32870"],["Content-Type","image/svg+xml"],["Server","Apache"],["Strict-Transport-Security","max-age=48211200; preload"],["X-Cache-Hits","10380"],["Accept-Ranges","bytes"],["Connection","keep-alive"]]',
          location: "",
        },
        tabActiveDwellTime: 15250,
      },
      {
        type: "http_requests" as OpenWPMType,
        httpRequest: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 25,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "32",
          url: "https://www.iana.org/_img/bookmark_icon.ico",
          method: "GET",
          time_stamp: "2018-11-23T01:34:48.375Z",
          referrer: "",
          headers:
            '[["Host","www.iana.org"],["User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"],["Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"],["Accept-Language","en-US,en;q=0.5"],["Accept-Encoding","gzip, deflate, br"],["Connection","keep-alive"]]',
          is_XHR: 0,
          is_full_page: 1,
          is_frame_load: 0,
          triggering_origin: "https://www.iana.org",
          loading_origin: "https://www.iana.org",
          loading_href: "https://www.iana.org/domains/reserved",
          resource_type: "image",
          top_level_url: "https://www.iana.org/domains/reserved",
          parent_frame_id: -1,
          frame_ancestors: "[]",
        },
        tabActiveDwellTime: 15500,
      },
      {
        type: "http_responses" as OpenWPMType,
        httpResponse: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 26,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "31",
          is_cached: 0,
          url:
            "https://www.iana.org/_img/2015.1/fonts/SourceCodePro-Regular.woff",
          method: "GET",
          response_status: 200,
          response_status_text: "HTTP/1.1 200 OK",
          time_stamp: "2018-11-23T01:34:48.500Z",
          headers:
            '[["Date","Thu, 22 Nov 2018 16:29:13 GMT"],["Last-Modified","Wed, 26 Aug 2015 00:25:13 GMT"],["Vary","Accept-Encoding"],["Expires","Thu, 29 Nov 2018 16:29:13 GMT"],["X-Frame-Options","SAMEORIGIN"],["Referrer-Policy","origin-when-cross-origin"],["Content-Security-Policy","upgrade-insecure-requests"],["Content-Length","89024"],["Content-Type","application/font-woff"],["Server","Apache"],["Strict-Transport-Security","max-age=48211200; preload"],["X-Cache-Hits","6467"],["Accept-Ranges","bytes"],["Connection","keep-alive"]]',
          location: "",
        },
        tabActiveDwellTime: 15750,
      },
      {
        type: "http_responses" as OpenWPMType,
        httpResponse: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 27,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "29",
          is_cached: 0,
          url: "https://www.iana.org/_img/2015.1/fonts/NotoSans-Regular.woff",
          method: "GET",
          response_status: 200,
          response_status_text: "HTTP/1.1 200 OK",
          time_stamp: "2018-11-23T01:34:48.657Z",
          headers:
            '[["Date","Thu, 22 Nov 2018 10:12:51 GMT"],["Last-Modified","Wed, 26 Aug 2015 00:25:13 GMT"],["Vary","Accept-Encoding"],["Expires","Thu, 29 Nov 2018 10:12:51 GMT"],["X-Frame-Options","SAMEORIGIN"],["Referrer-Policy","origin-when-cross-origin"],["Content-Security-Policy","upgrade-insecure-requests"],["Content-Length","157504"],["Content-Type","application/font-woff"],["Server","Apache"],["Strict-Transport-Security","max-age=48211200; preload"],["X-Cache-Hits","9494"],["Accept-Ranges","bytes"],["Connection","keep-alive"]]',
          location: "",
        },
        tabActiveDwellTime: 16000,
      },
      {
        type: "http_responses" as OpenWPMType,
        httpResponse: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 28,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "30",
          is_cached: 0,
          url: "https://www.iana.org/_img/2015.1/fonts/NotoSans-Bold.woff",
          method: "GET",
          response_status: 200,
          response_status_text: "HTTP/1.1 200 OK",
          time_stamp: "2018-11-23T01:34:48.670Z",
          headers:
            '[["Date","Thu, 22 Nov 2018 18:11:54 GMT"],["Expires","Thu, 29 Nov 2018 18:11:54 GMT"],["Vary","Accept-Encoding"],["X-Frame-Options","SAMEORIGIN"],["Referrer-Policy","origin-when-cross-origin"],["Content-Security-Policy","upgrade-insecure-requests"],["Last-Modified","Wed, 26 Aug 2015 00:25:13 GMT"],["Cache-control","public, s-maxage=1800, max-age=7205"],["Content-Type","application/font-woff"],["Server","Apache"],["Strict-Transport-Security","max-age=48211200; preload"],["X-Cache-Hits","5123"],["Accept-Ranges","bytes"],["Content-Length","156596"],["Connection","keep-alive"]]',
          location: "",
        },
        tabActiveDwellTime: 16000,
      },
      {
        type: "http_responses" as OpenWPMType,
        httpResponse: {
          incognito: 0,
          crawl_id: 0,
          extension_session_uuid: "ec32bcbd-7fee-4aaf-b36d-0ef56557e4fd",
          event_ordinal: 29,
          window_id: 3,
          tab_id: 1,
          frame_id: 0,
          request_id: "32",
          is_cached: 0,
          url: "https://www.iana.org/_img/bookmark_icon.ico",
          method: "GET",
          response_status: 200,
          response_status_text: "HTTP/1.1 200 OK",
          time_stamp: "2018-11-23T01:34:48.729Z",
          headers:
            '[["Date","Fri, 23 Nov 2018 01:17:38 GMT"],["X-Frame-Options","SAMEORIGIN"],["Referrer-Policy","origin-when-cross-origin"],["Content-Security-Policy","upgrade-insecure-requests"],["Vary","Accept-Encoding"],["Content-Length","4426"],["Content-Encoding","gzip"],["Last-Modified","Fri, 04 Jan 2013 01:17:14 GMT"],["Cache-control","public, s-maxage=1800, max-age=7205"],["Expires","Fri, 30 Nov 2018 01:17:38 GMT"],["Content-Type","image/vnd.microsoft.icon"],["Server","Apache"],["Strict-Transport-Security","max-age=48211200; preload"],["X-Cache-Hits","108"],["Accept-Ranges","bytes"],["Connection","keep-alive"]]',
          location: "",
        },
        tabActiveDwellTime: 16000,
      },
    ];
    const studyPayloadPreprocessor = new StudyPayloadPreprocessor();
    exampleDotComVisitFollowedByMoreInformationLinkClickQueue.map(
      (studyPayloadEnvelope: StudyPayloadEnvelope) => {
        if (studyPayloadPreprocessor.shouldBeBatched(studyPayloadEnvelope)) {
          studyPayloadPreprocessor.queueForProcessing(studyPayloadEnvelope);
        }
      },
    );

    describe("Queue processing 5 seconds after the first visit (around the time of the second visit)", function() {
      const nowDateTime = addSeconds(firstVisitDateTime, 5);
      it("should not yield any navigation batches to send", async function() {
        studyPayloadPreprocessor.navigationBatchSendQueue = [];
        await studyPayloadPreprocessor.processQueue(nowDateTime);
        assert.equal(
          studyPayloadPreprocessor.navigationBatchSendQueue.length,
          0,
        );
      });
    });

    describe("Subsequent queue processing 12 seconds after the visit (around 7 seconds after the second visit)", function() {
      const nowDateTime = addSeconds(firstVisitDateTime, 12);
      it("should yield relevant navigation batches to send", async function() {
        studyPayloadPreprocessor.navigationBatchSendQueue = [];
        await studyPayloadPreprocessor.processQueue(nowDateTime);
        assert.equal(
          studyPayloadPreprocessor.studyPayloadEnvelopeProcessQueue.length,
          23,
        );
        assert.equal(
          studyPayloadPreprocessor.navigationBatchSendQueue.length,
          1,
        );
        const firstNavigationBatch: NavigationBatch =
          studyPayloadPreprocessor.navigationBatchSendQueue[0];
        assert.equal(firstNavigationBatch.childEnvelopes.length, 4);
        assert.equal(firstNavigationBatch.httpRequestCount, 2);
        assert.equal(firstNavigationBatch.httpResponseCount, 2);
        assert.equal(firstNavigationBatch.httpRedirectCount, 0);
        assert.equal(firstNavigationBatch.javascriptOperationCount, 0);
      });
    });

    describe("Subsequent queue processing 17 seconds after the visit (around 12 seconds after the second visit)", function() {
      const nowDateTime = addSeconds(firstVisitDateTime, 17);
      it("should yield relevant navigation batches to send", async function() {
        studyPayloadPreprocessor.navigationBatchSendQueue = [];
        await studyPayloadPreprocessor.processQueue(nowDateTime);
        assert.equal(
          studyPayloadPreprocessor.studyPayloadEnvelopeProcessQueue.length,
          0,
        );
        assert.equal(
          studyPayloadPreprocessor.navigationBatchSendQueue.length,
          1,
        );
        const firstNavigationBatch: NavigationBatch =
          studyPayloadPreprocessor.navigationBatchSendQueue[0];
        assert.equal(firstNavigationBatch.childEnvelopes.length, 22);
        assert.equal(firstNavigationBatch.httpRequestCount, 11);
        assert.equal(firstNavigationBatch.httpResponseCount, 10);
        assert.equal(firstNavigationBatch.httpRedirectCount, 1);
        assert.equal(firstNavigationBatch.javascriptOperationCount, 0);
      });
    });

    describe("Subsequent queue processing 25 seconds after the visit (around 20 seconds after the second visit)", function() {
      const nowDateTime = addSeconds(firstVisitDateTime, 25);
      it("should not yield any navigation batches to send", async function() {
        studyPayloadPreprocessor.navigationBatchSendQueue = [];
        await studyPayloadPreprocessor.processQueue(nowDateTime);
        assert.equal(
          studyPayloadPreprocessor.studyPayloadEnvelopeProcessQueue.length,
          0,
        );
        assert.equal(
          studyPayloadPreprocessor.navigationBatchSendQueue.length,
          0,
        );
      });
    });
  });
});