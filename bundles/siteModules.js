/* Minification failed. Returning unminified contents.
(4793,9,4810,10): run-time error JS1314: Implicit property name must be identifier: handleUrlRoute(moduleElem) {
            const windowLocation = w.location;
            const hrefSplit = windowLocation.href.split(pathNameBaseRoute)[1]
            let route = windowLocation.pathname.split(pathNameBaseRoute)[1];
            if (hrefSplit && (hrefSplit.startsWith("#") || hrefSplit.startsWith("?"))) {
                route = RouteManager.generateNewRouteFromOldHashPath(windowLocation, pathNameBaseRoute);
            }
            if (route && route.startsWith("/")) route = route.slice(1);
            const shownAccordionItem = moduleElem.querySelector(".accordion-item.show");
            if (route && !route.startsWith("?")) {
                openTopicFromRoutePath(route, moduleElem, shownAccordionItem);
                return;
            }
            if (shownAccordionItem) closeCollapse(shownAccordionItem).then(() => {
                setModalOpenOnBody(true);
                closeTopic(shownAccordionItem);
            });
        }
(4811,9,4819,10): run-time error JS1314: Implicit property name must be identifier: getCurrentLanguageCode(pathNameBaseRoute) {
            const pathname = window.location.pathname;
            const pathParts = pathname.split(pathNameBaseRoute);
            if (pathParts[0]) {
                const languageCode = pathParts[0].replace("/", "");
                return `/${languageCode}`;
            }
            return "";
        }
(4821,9,4823,10): run-time error JS1314: Implicit property name must be identifier: getRoute(topicId = "", sectionId = "", searchParam = "") {
            return `${topicId}${searchParam}${(topicId && sectionId ? `#${topicId}.${sectionId}` : "")}`;
        }
(4825,9,4862,10): run-time error JS1314: Implicit property name must be identifier: pushHistory({ topicId = "", sectionId = "", searchParam = "", pathNameBaseRoute }) {
            const windowLocation = window.location;
            if ("pushState" in history) {
                let route = RouteManager.getRoute(topicId, sectionId, searchParam);
                if (!route.startsWith("?")) route = `${route ? `/${route}` : ""}`;
                const fullRoute = `${windowLocation.origin}${RouteManager.getCurrentLanguageCode(pathNameBaseRoute)}${pathNameBaseRoute}${route}`;
                history.pushState("", d.title, fullRoute);
                // Canonical link
                const canonicalPath = `${pathNameBaseRoute}${(topicId ? `/${topicId}` : "")}`;
                const canonicalHref = `${windowLocation.origin}${canonicalPath}`;
                let canonicalLink = d.querySelector("link[rel='canonical']");
                if (canonicalLink) {
                    canonicalLink.href = canonicalHref;
                } else {
                    canonicalLink = d.createElement("link");
                    canonicalLink.setAttribute("rel", "canonical");
                    canonicalLink.setAttribute("href", canonicalHref);
                    d.head.appendChild(canonicalLink);
                }

                // Alternate links
                const alternateLinks = d.querySelectorAll("link[rel='alternate'][hreflang]");
                alternateLinks.forEach(link => {
                    const hreflang = link.getAttribute("hreflang");
                    if (hreflang) {
                        const alternateHref = `${windowLocation.origin}/${hreflang}${canonicalPath}`;
                        link.setAttribute("href", alternateHref);
                    }
                });
            } else {
                // Fallback for old browsers
                let scrollV = d.body.scrollTop;
                let scrollH = d.body.scrollLeft;
                windowLocation.hash = route;
                d.body.scrollTop = scrollV;
                d.body.scrollLeft = scrollH;
            }
        }
(4864,9,4872,10): run-time error JS1314: Implicit property name must be identifier: generateNewRouteFromOldHashPath(windowLocation, pathNameBaseRoute) {
            const hash = windowLocation.hash;
            let [topicId, sectionId] = (hash ? hash.split(".") : ["", ""]);
            if (topicId.startsWith("#")) topicId = topicId.slice(1);
            const searchParam = windowLocation.search;
            const newRoute = (hash ? RouteManager.getRoute(topicId, sectionId, searchParam) : searchParam);
            RouteManager.pushHistory({ topicId, sectionId, searchParam, pathNameBaseRoute });
            return newRoute;
        }
(4875,9,4918,10): run-time error JS1314: Implicit property name must be identifier: highlight({ startingIndices, matchedString }, listItem) {
            if (!startingIndices || !matchedString) return;
            const target = listItem.querySelector(`.${listButtonClass} .${buttonTextClass}`);
            let remaining = startingIndices.slice(); // Copy to avoid mutation
            function highlightNode(node) {
                if (node.nodeType !== Node.TEXT_NODE || remaining.length === 0) return;

                let text = node.textContent;
                let offset = 0;
                let parent = node.parentNode;

                while (remaining.length > 0) {
                    let matchIndex = remaining[0] - offset;
                    if (matchIndex < 0 || matchIndex >= text.length) break;

                    // Split before, match, after
                    let before = text.slice(0, matchIndex);
                    let match = text.slice(matchIndex, matchIndex + matchedString.length);
                    let after = text.slice(matchIndex + matchedString.length);

                    // Create nodes
                    if (before) parent.insertBefore(document.createTextNode(before), node);
                    let mark = document.createElement("mark");
                    mark.className = "highlight";
                    mark.textContent = match;
                    parent.insertBefore(mark, node);

                    // Update text and offset
                    text = after;
                    offset += matchIndex + matchedString.length;
                    remaining.shift();
                }

                if (text) parent.insertBefore(document.createTextNode(text), node);
                parent.removeChild(node);
            }

            // Use TreeWalker to visit all text nodes
            let walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT, null, false);
            let textNodes = [];
            while (walker.nextNode()) textNodes.push(walker.currentNode);

            textNodes.forEach(highlightNode);
        }
(4919,9,4926,10): run-time error JS1314: Implicit property name must be identifier: clear(listItems) {
            listItems.forEach(item => {
                const buttonText = item.querySelector(`.${listButtonClass} .${buttonTextClass}`);
                const textContent = buttonText.textContent
                buttonText.innerHTML = '';
                buttonText.textContent = textContent;
            });
        }
(4825,47-48): run-time error JS1292: Strict-mode does not allow duplicate property names: =
(4825,65-66): run-time error JS1292: Strict-mode does not allow duplicate property names: =
(4811,9,4819,10): run-time error JS1292: Strict-mode does not allow duplicate property names: getCurrentLanguageCode(pathNameBaseRoute) {
            const pathname = window.location.pathname;
            const pathParts = pathname.split(pathNameBaseRoute);
            if (pathParts[0]) {
                const languageCode = pathParts[0].replace("/", "");
                return `/${languageCode}`;
            }
            return "";
        }
(4821,9,4823,10): run-time error JS1292: Strict-mode does not allow duplicate property names: getRoute(topicId = "", sectionId = "", searchParam = "") {
            return `${topicId}${searchParam}${(topicId && sectionId ? `#${topicId}.${sectionId}` : "")}`;
        }
(4825,9,4862,10): run-time error JS1292: Strict-mode does not allow duplicate property names: pushHistory({ topicId = "", sectionId = "", searchParam = "", pathNameBaseRoute }) {
            const windowLocation = window.location;
            if ("pushState" in history) {
                let route = RouteManager.getRoute(topicId, sectionId, searchParam);
                if (!route.startsWith("?")) route = `${route ? `/${route}` : ""}`;
                const fullRoute = `${windowLocation.origin}${RouteManager.getCurrentLanguageCode(pathNameBaseRoute)}${pathNameBaseRoute}${route}`;
                history.pushState("", d.title, fullRoute);
                // Canonical link
                const canonicalPath = `${pathNameBaseRoute}${(topicId ? `/${topicId}` : "")}`;
                const canonicalHref = `${windowLocation.origin}${canonicalPath}`;
                let canonicalLink = d.querySelector("link[rel='canonical']");
                if (canonicalLink) {
                    canonicalLink.href = canonicalHref;
                } else {
                    canonicalLink = d.createElement("link");
                    canonicalLink.setAttribute("rel", "canonical");
                    canonicalLink.setAttribute("href", canonicalHref);
                    d.head.appendChild(canonicalLink);
                }

                // Alternate links
                const alternateLinks = d.querySelectorAll("link[rel='alternate'][hreflang]");
                alternateLinks.forEach(link => {
                    const hreflang = link.getAttribute("hreflang");
                    if (hreflang) {
                        const alternateHref = `${windowLocation.origin}/${hreflang}${canonicalPath}`;
                        link.setAttribute("href", alternateHref);
                    }
                });
            } else {
                // Fallback for old browsers
                let scrollV = d.body.scrollTop;
                let scrollH = d.body.scrollLeft;
                windowLocation.hash = route;
                d.body.scrollTop = scrollV;
                d.body.scrollLeft = scrollH;
            }
        }
(4864,9,4872,10): run-time error JS1292: Strict-mode does not allow duplicate property names: generateNewRouteFromOldHashPath(windowLocation, pathNameBaseRoute) {
            const hash = windowLocation.hash;
            let [topicId, sectionId] = (hash ? hash.split(".") : ["", ""]);
            if (topicId.startsWith("#")) topicId = topicId.slice(1);
            const searchParam = windowLocation.search;
            const newRoute = (hash ? RouteManager.getRoute(topicId, sectionId, searchParam) : searchParam);
            RouteManager.pushHistory({ topicId, sectionId, searchParam, pathNameBaseRoute });
            return newRoute;
        }
(4919,9,4926,10): run-time error JS1292: Strict-mode does not allow duplicate property names: clear(listItems) {
            listItems.forEach(item => {
                const buttonText = item.querySelector(`.${listButtonClass} .${buttonTextClass}`);
                const textContent = buttonText.textContent
                buttonText.innerHTML = '';
                buttonText.textContent = textContent;
            });
        }
 */
"use strict";
const socialService = function () {
    const deviceAgent = navigator.userAgent;
    const iosOrAndroid = deviceAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/);

    this.showPopup = function (shareUrl, anchorObject) {
        const width = 575;
        const height = 400;
        const left = ($(window).width() - width) / 2;
        const top = ($(window).height() - height) / 2;
        let url = shareUrl;
        const opts = 'status=1' +
                ',width=' + width +
                ',height=' + height +
                ',top=' + top +
                ',left=' + left;

        if (iosOrAndroid) {
            $(anchorObject).attr('href', url.replace('p[url]', 'u'));
            $(anchorObject).attr('target', '_blank');
        }
        else {
            window.open(url, 'socialPopup', opts);
            return false;
        }
    };
    this.showEmail = function (parentModId) {
        const $title = $('meta[name=title]').attr("content");
        let windowUrl = window.location;
        if (window.location.href.split("?")[0] !== null) {
            windowUrl = window.location.href.split("?")[0];
        }
        const $window = windowUrl + "?ss=t%26utm_campaign=page_social_share%26utm_source=email%26utm_medium=social";
        if (parentModId === undefined) {
            window.location.href = "mailto:?subject=Check%20out%20this%20page%20on%20" + location.hostname + "&body=" + $title + "%0A%0A" + $window
        }
        else {
            window.location.href = "mailto:?subject=Check%20out%20this%20page%20on%20" + location.hostname + "&body=" + $title + "%0A%0A" + $window + "%23" + parentModId;

        }
        return false;
    };

}
window.SocialService = new socialService();;
(function (d, $) {
    $.carouselMoveTrack = function (id, nextSlide) {
        const slidesToShow = $("#" + id + " .slider").slick('slickGetOption', 'slidesToShow'),
            page = 1 + Math.ceil(nextSlide / slidesToShow);
        $("#" + id + " .indicator-active").css("left", $("#" + id + " .indicator-active").width() * (page - 1));

    };
    $.carouselInitTrack = function (id) {
        const slides = $("#" + id + " .slider .item").length,
            slidesToShow = $("#" + id + " .slider").slick('slickGetOption', 'slidesToShow'),
            total = Math.ceil(slides / slidesToShow),
            trackWidth = $("#" + id + " .indicator-track").width(),
            itemWidth = Math.floor(trackWidth / total);
        //Only show paging if there are more than one slide
        if (total > 1) {
            $("#" + id + " .control").removeClass("hidden");
            $("#" + id + " .indicator-track").html("");
            $("#" + id + " .indicator-active").css("width", itemWidth);
            let i;
            for (i = 1; i <= total; i++) {
                $("#" + id + " .indicator-track").append('<li class="indicator-track-item" data-indicator="' + i + '" style="width: ' + itemWidth + 'px"></li > ');
            }
        } else {
            $("#" + id + " .control").addClass("hidden");
        }
    }
    $(d).ready(function () {        
        $(".carousel").on('slide.bs.carousel', function () {
            if (YT_players) {
                for (const j in YT_players) {
                    if ($(this).find("#" + YT_players[j].vid).length === 1 && YT_players[j].getPlayerState && YT_players[j].getPlayerState() === 1) YT_players[j].pauseVideo();
                }
            }
        });
    });
})(document, jQuery);;
(function (w, factory) {
    w.DialogNamespace = factory();
})(window, function () {
    function refreshSplideOnDialogShown(splideItem, splide) {
        if (!splideItem || !splide) return;
        const dialog = splideItem.closest(".modal");
        if (!dialog) return;
        dialog.addEventListener("shown.bs.modal", () => {
            splide.refresh();
        });
    }
    return {
        refreshSplideOnDialogShown
    }
});
(function (w, factory) {
    w.OpenDialog = factory;
})(window, function (id) {
    const d = document;
    const dialogElem = d.getElementById(id)
    const mainWrapper = d.getElementById("main-wrapper");
    dialogElem.addEventListener("show.bs.modal", () => {
        d.querySelectorAll(".dialog-module.show").forEach(openDialog => {
            const openDialogInstance = bootstrap.Modal.getInstance(openDialog);
            openDialogInstance.hide();
        });
        try {
            mainWrapper.setAttribute("aria-hidden", true);
        } catch (e) {
            console.log(e);
        }
    });
    dialogElem.addEventListener("hide.bs.modal", () => {
        try {
            dialogElem.removeAttribute("open");
            mainWrapper.setAttribute("aria-hidden", false);
        } catch (e) {
            console.log(e);
        }
    });
    const dialogInstance = new bootstrap.Modal(dialogElem);
    dialogInstance.show();
});
(function (d) {
    d.addEventListener("DOMContentLoaded", function () {
        const dialogs = d.querySelectorAll(".dialog-module");
        dialogs.forEach(dialog => {
            d.querySelector("body").append(dialog);

            /*this adds the OpenDialog link in sitecore preview mode of the module */
            const searchParams = new URLSearchParams(window.location.search);
            if (searchParams.get("sc_mode") === "preview") {
                const itemId = searchParams.get("sc_itemid");
                const id = dialog.id;
                let isNotParentPreview;
                if (itemId && itemId !== null) {
                    isNotParentPreview = itemId.indexOf(id.split('_')[1].toUpperCase());
                }
                if (isNotParentPreview > -1) {
                    const previewAnchor = d.createElement("a");
                    previewAnchor.setAttribute("data-bs-toggle", "modal");
                    previewAnchor.href = `#${id}`
                    previewAnchor.innerText = "Click here to preview the Dialog";
                    const docFragment = d.createDocumentFragment();
                    docFragment.appendChild(
                        d.createElement("p").appendChild(
                            document.createTextNode("Copy the text below and paste into JavaScript link field")
                        ).parentNode
                    );
                    docFragment.appendChild(
                        d.createElement("p").appendChild(
                            document.createTextNode(`javascript:OpenDialog('${id}')`)
                        ).parentNode
                    );
                    docFragment.appendChild(previewAnchor);
                    dialog.after(docFragment);
                }
            }

        });
    });
})(document);

;
(function (d) {
    function UpdateGEOLocation(footer) {
        fetch("https://get.geojs.io/v1/ip/geo.json").then(response => {
            if (response.ok) {
                response.json().then(data => {
                    const geolink = footer.querySelector(".social-row ul.global-links li.geo-link");
                    const countryLinks = geolink.getAttribute("data-cvx-countries");
                    if (countryLinks !== "") {
                        const jsonData = JSON.parse(countryLinks);
                        const countryData = jsonData["countrylinks"].find(country => country["countrycode"].trim().toLowerCase() === data["country_code"].trim().toLowerCase());
                        if (countryData) {
                            const linkelement = geolink.querySelector(".cta-link");
                            linkelement.setAttribute("href", encodeURI(countryData["link"]));
                            const textelement = linkelement.querySelector(".cta-underline");
                            textelement.textContent = countryData["countryname"];
                        }
                    }
                });
            }
        }).catch(error => console.log(error));               
    }

    d.addEventListener("DOMContentLoaded", function (_event) {
        d.querySelectorAll(".footer-2023").forEach(footer => {
            UpdateGEOLocation(footer); 
        });
    });
})(document);
;
(function (d, $) {
    $(d).ready(function () {
        $('.general-filter:not(.tab-filter-bar) .dropdown').each(function (_key, dropdown) {
            let $dropdown = $(dropdown);
            //set default selected-text to intial active text
            $dropdown.find('.dropdown-button .selected-text').text($dropdown.find('.dropdown-menu .active .option-text').text());
            $dropdown.find('.dropdown-menu .filter-link').on('click', function (e) {
                let $this = $(this);
                //Prevent click on selected links
                if ($this.hasClass("prevent-default-click")) {
                    e.preventDefault();
                }
                //set aria-activedescendant on the button
                $dropdown.find(".dropdown-button").attr("aria-activedescendant", $this.attr("id")).find(".selected-text").text($this.find(".option-text").text());
                //remove active state and set aria-selected to false on all items
                $dropdown.find(".dropdown-menu a").attr("aria-selected", false).removeClass("active");
                //add active state and aria-selected to true on clicked item
                $this.attr("aria-selected", true).addClass("active");
            }).on("keydown", function (e) {
                let keyCode = e.keyCode || e.which;
                if (keyCode === 32) {
                    e.preventDefault();
                    e.target.click();
                }
            });
        });
    });
})(document, jQuery);
;
const iframeOrigins = (function () {
    let privateOriginArray = ["https://chevron.az1.qualtrics.com", "https://chevroncorp.gcs-web.com", document.location.origin];
    function publicSetOrigin(originStr) {
        privateOriginArray.push(originStr);
    }
    function publicGetOrigin() {
        return privateOriginArray;
    }
    return {
        setOrigin: publicSetOrigin,
        getOrigin: publicGetOrigin
    }
})();

(function (w, d, $) {

    function setHeights(elem, e) {
        if (e.data.type === "height" && elem.contentWindow === e.source && e.data.height) {
            $(elem).height(e.data.height);
        }
        if (e.data.type === "submit" && elem.contentWindow === e.source && e.data.height) {
            $(elem).height(e.data.height);
        }
        if (e.data.type === "paging" && elem.contentWindow === e.source && e.data.paging) {
            if (e.data.src && e.data.src.indexOf("page=") > 0) elem.scrollIntoView();
        }
    }
    $(d).ready(function () {
        w.onbeforeprint = function () {
            //before print            
            $(".iframe").each(function () {
                const $iframeParent = $(this).closest(".iframe-parent"),
                      $printStyle = $('<style id="' + $iframeParent.attr("id") + '-stylesheet" type="text/css">@media print { #' + $iframeParent.attr("id") + ' .iframe { height:' + $(this).height() * 1.25 + 'px !important; }}</style>');
                $iframeParent.prepend($printStyle);
            });
            
        }
        w.onafterprint = function () {
            //after print
            $(".iframe").each(function () {
                const $iframeParent = $(this).closest(".iframe-parent");
                $('#' + $iframeParent.attr("id") + '-stylesheet').remove();
            });
        }

        //adjust frame height, this requires a script to run in each iframe
        const eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
        const eventListener = window[eventMethod];
        const messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";
        eventListener(messageEvent, function (e) {
            try {
                const origin = e.origin || e.originalEvent.origin;
                if (iframeOrigins.getOrigin().indexOf(origin) >= 0) {
                    $("iframe").each(function () {
                        setHeights(this, e);
                    });
                }
            } catch (ev) { console.log(ev); }

        }, false);
    });
})(window, document, jQuery);;
(function (d, $) {
    $(d).ready(function () {
        //Used on facts-bar and col-tiles to keep same height
        $(".col-tiles .col, .facts-bar .col, .text-only .col").matchHeight({
            byRow: true
        });
    });
})(document, jQuery);;
(function (d, $) {

    //handle error messages
    function handleErrorMessages(event, form, errorMessages, searchErrorId) {
        const requiredFields = form.querySelectorAll("[required]");
        const target = event.target;
        const invalidFields = form.querySelectorAll(":invalid");

        const updateError = function (validationElement) {
            validationElement.classList.add("error");
            validationElement.setAttribute("aria-invalid", "true");
            validationElement.setAttribute("aria-describedby", searchErrorId);
            errorMessages.querySelector("#" + searchErrorId + " .error").innerHTML = validationElement.validationMessage;
            errorMessages.querySelector("#" + searchErrorId).classList.remove("hide");
        };

        const hideErrorMessages = function () {
            //hide messages container
            errorMessages.classList.add("hide");
            requiredFields.forEach(function (requiredFieldItem) {
                requiredFieldItem.classList.remove("error");
            });
        };
        switch (event.type) {
            case "input":
                if (target.checkValidity() || target.value === "") {
                    //remove error     
                    target.classList.remove("error");
                    target.removeAttribute("aria-invalid");
                    target.removeAttribute("aria-describedby");
                    errorMessages.querySelector("#" + searchErrorId).classList.add("hide");
                    //if no errors hide error container
                    if (form.querySelectorAll("[required].error").length === 0) {
                        hideErrorMessages();
                    }
                } else {
                    //update single error
                    errorMessages.classList.remove("hide");
                    updateError(target);
                }
                break;
            case "click":
            case "submit":
                if (invalidFields.length > 0) {
                    //clear all fields
                    requiredFields.forEach(function (requiredFieldItem) {
                        requiredFieldItem.removeAttribute("aria-invalid");
                        requiredFieldItem.removeAttribute("aria-describedby");
                    });
                    // Update labels and styles 
                    invalidFields.forEach(function (invalidField) {
                        updateError(invalidField);
                    });
                    errorMessages.classList.remove("hide");
                    // If there are errors, give focus to the first invalid field and show
                    invalidFields[0].focus();
                }
                break;
        }
        if (event.type === "input") {
            return false;
        }
    }
    function replaceValidationUI(form) {
        //create errorMessages container/listitems and insert into page
        const errorMessages = d.createElement("ul");
        const requiredField = form.querySelector(".search-input");
        const searchErrorId = requiredField.id + "-search-error";
        errorMessages.setAttribute("class", "error-messages body-xs hide");

        const listHtml = "<li id ='" + searchErrorId + "'><a class='medium-red' href='#" + requiredField.id + "'>" +
                "<span class='error'></span>" +
                "</a></li>";
        errorMessages.innerHTML = listHtml;

        form.insertAdjacentElement("afterend", errorMessages);

        // Suppress the default bubbles
        form.addEventListener("invalid", function (e) {
            e.preventDefault();
        }, true);

        // Support Safari, iOS Safari, and the Android browser—each of which do not prevent
        // form submissions by default
        form.addEventListener("submit", function (e) {
            if (!this.checkValidity()) {
                e.preventDefault();
                handleErrorMessages(e, form, errorMessages, searchErrorId);
            }
        });

        //validate on submit click
        form.querySelector("button[type=submit]").addEventListener("click", function (event) {
            handleErrorMessages(event, form, errorMessages, searchErrorId);
        });

        // On required fields, validate on input
        form.querySelectorAll("[required]").forEach(function (requiredFormElement) {
            requiredFormElement.addEventListener('input', function (e) {
                handleErrorMessages(e, form, errorMessages, searchErrorId);
            });
        });
    }
    function showHidePlaceHolder($input) {
        const $label = $input.parent().find(".placeholder");
        if ($input.val().length > 0) {
            //hide placeholder
            $label.addClass("placeholder-state-hidden");
        } else {
            //show placeholder
            $label.removeClass("placeholder-state-hidden");
        }
    }
    function handleSearchBars(searchBar) {
            replaceValidationUI(searchBar.querySelector(".search-bar-container"));
            $(searchBar).find('.search-input').each(function () {
                //showHidePlaceHolder each search-input on load
                showHidePlaceHolder($(this));
                $(this).bind("input", function () {
                    showHidePlaceHolder($(this));
                }).on("keyup", function (ev) {
                    if (ev.key !== "" && $(this).val() !== "") {
                        $(".search-query-clear").show();
                    } else {
                        $(".search-query-clear").hide();
                    }
                }).on("blur", function () {
                    if ($(this).val() !== "") {
                        $(".search-query-clear").show();
                    } else {
                        $(".search-query-clear").hide();
                    }
                });
            });
            //clear search input
            $(searchBar).find(".clear-search-link").on("click", function () {
                $(this).parent().find(".search-input").val("").focus();
                $(this).hide();
            });
    }
    $(d).ready(function () {
        const searchBars = d.querySelectorAll(".search-bar");
        searchBars.forEach(function (searchBar) {
            handleSearchBars(searchBar);
        });
        $('.dropdown-large.search').each(function () {
            $(this).on('shown.bs.dropdown', function (e) {
                e.stopPropagation();
                e.preventDefault();
                $(this).find('.search-input').focus();
            });
        });          
        //Prevent Bootstrap dropdowm menu from closing and submit form
        $('.dropdown-menu .search-bar, .body-home .search-bar').each(function () {
            $(this).click(function (e) {
                const $this = $(this);
                const $target = $(e.target);
                e.stopPropagation();
                //only apply to non search pages
                if (!$this.closest("body").hasClass("body-search")) {
                    if ($target.hasClass("clear-button") || $target.closest("a").hasClass("clear-button")) {
                        $this.parent().find(".search-input").val("").focus();
                    }
                }
            });
        });
    });

})(document, jQuery);;
(function (w, d, $) {
    $(d).ready(function () {
        function setScrollPosition() {
            $(d).scroll(function () {
                const y = $(this).scrollTop();
                let windowHeightTriggerPageShare = $(w).height() * 1;
                if (w.innerWidth < 768) {
                    windowHeightTriggerPageShare = $(w).height() * 2;
                }
                if (y > windowHeightTriggerPageShare) {
                    $('.social-container').closest('body').addClass('social-container-shown');
                } else {
                    $('.social-container').closest('body').removeClass('social-container-shown');
                }
            });
        }
        if ($(".social-container").length) {
            //If social-container exists on page add body class
            $('body').addClass("has-social-container");
            //Show container only on page scroll

            setScrollPosition();
            $(w).resize(function () {
                setScrollPosition();
            });
            //Hover state image swap
            $(".social-container .social-icons-images img").each(function () {
                $(this).mouseover(function () {
                    const src = $(this).attr("src").replace(".png", "-selected.png");
                    $(this).attr("src", src);
                })
                .mouseout(function () {
                    const src = $(this).attr("src").replace("-selected.png", ".png");
                    $(this).attr("src", src);
                });
            }); 
        }   
    });
})(window, document, jQuery);;
(function (w, d, $) {
    $(d).ready(function () {
        function checkTableWidth() {
            const bodyWidth = $("body").width();
            //Apply only to mobile
            if (bodyWidth <= 767) {
                ///Handles Table Caption width. 
                $(".table-container table").each(function () {
                    $(this).find("caption.caption").width(bodyWidth);
                });
            }
        }
        checkTableWidth();
        $(w).resize(checkTableWidth);
    });

})(window, document, jQuery);;
(function (w, d, $) {
    $(d).ready(function () {
        //keep cols same height
        $(".media-container .row > .match-height").matchHeight({
            byRow: true
        });

        $('.modal').on('hidden.bs.modal', function () {
            if ($(this).find("iframe[data-toggle='youtube']").length) {
                const vid = $(this).find("iframe[data-toggle='youtube']")[0].id;
                const player = YT_findById(vid);
                if (player !== undefined && player.pauseVideo) player.pauseVideo();
            }
        });

    });

    $(w).on('load', function () {
        (function () {
            let tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        })();
    });
})(window, document, jQuery);

const YT_players = [];
function YT_findById(vid) {
    for (const i in YT_players) {
        if (YT_players[i].vid === vid) return YT_players[i];
    }
}

function YT_registerPlayers() {
    const $ = jQuery;
    $("div[data-toggle='youtube']").each(function (i) {
        const videoId = $(this).attr("data-id");
        const vid = "YT_" + i;
        $(this).attr("id", vid);
        const player = new YT.Player(vid, {
            videoId: videoId,
            host: 'https://www.youtube-nocookie.com',
            wmode : 'opaque',
            playerVars: { 'autoplay': 0, 'controls': 1, 'modestbranding': 1, 'wmode': 'opaque', 't': (new Date()).getTime() },
            events: {
                'onStateChange': function (event) {
                    if (event.data === -1 || event.data === 1) {
                        for (const j in YT_players) {
                            if (YT_players[j].vid !== vid && YT_players[j].pauseVideo && YT_players[j].getPlayerState() === 1) YT_players[j].pauseVideo();
                        }
                    }
                }
            }
        });
        player.vid = vid;
        YT_players.push(player);
    });
}

function onYouTubeIframeAPIReady() {
    /*to disable youtube, comment out the next line*/
    YT_registerPlayers();
};
const mediaCommonNamespace = (function (w) {
    function getButton(media) {
        return media.closest(".media-container").querySelector(".play-pause-button");
    }
    function setButton(media, button = null) {
        if(!button) button = getButton(media);
        if (media.paused) {
            button.classList.add("paused");
            return;
        }
        button.classList.remove("paused");
    }
    function hasMediaSrcChanged(media, newMediaSrc) {
        return media.querySelector("source").getAttribute("src") !== newMediaSrc;
    }

    function setMedia(media, breakpoint = 768) {
        const defaultMediaSource = media.dataset.cvxMediaDesktop ? media.dataset.cvxMediaDesktop : media.dataset.cvxMediaMobile;
        const mobileMediaSource = media.dataset.cvxMediaMobile ? media.dataset.cvxMediaMobile : "";
        if (w.innerWidth < breakpoint && mobileMediaSource) {
            if (hasMediaSrcChanged(media, mobileMediaSource)){
                media.querySelector("source").src = mobileMediaSource;
                media.load();
            }
            return;
        } 
        if (hasMediaSrcChanged(media, defaultMediaSource)) {
            media.querySelector("source").src = defaultMediaSource;
            media.load();
        }
    }
    function dispatchMediaStartEvent(media) {
        media.dispatchEvent(new CustomEvent("media-start", { bubbles: true }));
    }
    function setMediaEventListenters(media, button = null) {
        if (!button) button = getButton(media);
        ["play", "pause", "ended"].forEach(function (event) {
            media.addEventListener(event, (e) => {
                if (button) {
                    setButton(media, button)
                }
            });
        });
        if (button) {
            button.addEventListener("click", () => {
                toggleMedia(media);
            });
        }
    }
    function toggleMedia(media) {
        if (media.paused) {
            media.play();
            return;
        }
        media.pause();
    }

    return {
        setMedia: setMedia,
        setMediaEventListenters: setMediaEventListenters,
        dispatchMediaStartEvent: dispatchMediaStartEvent
    }
})(window);
;
(function (w, d, $) {
    function setVideoHeight() {
        $(".video-modal:not(.c18c) .background").each(function () {
            const bg = $(this);
            let url = bg.css("background");
            if (url === null || url === undefined || url === "" || url === "none") {
                url = bg.css("background-image");
            }
            if (url !== null && url !== "none") {
                url = url.split("url(")[1].split(")")[0].replace(/["']/g, "");
                const image = new Image();

                $(image).on('load', function () {
                    bg.height(image.height);
                    bg.closest(".background-container").height(image.height);
                    bg.parent(".video-modal").height(image.height);
                    const $bottom = bg.find(".bottom");
                    $bottom.css("bottom", $bottom.height + "px");
                });
                image.src = url;
            }
        });
    }
    $(d).ready(function () {
        setVideoHeight();
        $(w).resize(function () {
            setVideoHeight();
        });

        $('.modal').on('hidden.bs.modal', function () {
            if (YT_players) {
                for (const j in YT_players) {
                    if ($(this).find("#" + YT_players[j].vid).length === 1 && YT_players[j].getPlayerState && YT_players[j].getPlayerState() === 1) YT_players[j].pauseVideo();
                }
            }
        });
    });
})(window, document, jQuery);;
(function (d) {
    d.addEventListener("DOMContentLoaded", function () {
        d.querySelectorAll(".a01-video .media-wrapper").forEach(videoParent => {
            const videoElem = videoParent.querySelector("[data-toggle='youtube']");
            const hasPlayButton = videoElem.dataset.playButton;
            if (hasPlayButton && hasPlayButton === "true") {
                videoParent.querySelector(".video-link").addEventListener("click", (e) => {
                    if (window.innerWidth >= 768) {
                        e.preventDefault();
                        const vid = videoElem.id;
                        const player = YT_findById(vid);
                        videoParent.classList.add("show");
                        player.playVideo();
                    }
                });
            }
        });
    });
})(document);;
(function (w, d, $) {
    function reinit(id) {
        $("#" + id + " .slider").find(".slick-slide").removeClass("show-content");
        $("#" + id + " .slider").slick("unslick");
        init(id);
    }
    const setColor = (ele, nextColor) => {
        //default color
        if (!nextColor) nextColor = "dark-blue";
        const parentElement = ele[0].closest(".a03");
        parentElement.classList.forEach(function (className) {
            if (className.startsWith("bg-")) {
                parentElement.classList.remove(className);
            }
        });
        parentElement.classList.add("bg-" + nextColor);
    };

    function init(id) {
        $("#" + id + " .slider").on("init reInit", function () {
            $(this).find(".slick-list").removeAttr('aria-live');
            $(this).closest(".slider-container").find(".arrow-container").css("right", centerPadding() + 12 + "px");
            if (!$(this).closest(".carousel").hasClass("a03b")) {
                setColor($(this), $(this).find(".slick-active").data("color"));
            }
            $(this).find(".slick-active").addClass("show-content");
        });
        $("#" + id + " .slider").slick({
            slide: "#" + id + " .slider .item",
            accessibility: true,
            cvxAccessibilityOverride: true,
            focusOnChange: true,
            centerMode: true,
            centerPadding: centerPadding() + "px",
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: true,
            dots: true,
            autoplay: false,
            infinite: true,
            arrows: true,
           appendDots: "#" + id +" .dots-container",
            nextArrow: "#" + id +" .slick-next",
            prevArrow: "#" + id + " .slick-prev",
        }).on("beforeChange", function (_event, _slick, currentSlide, nextSlide) {
            if (!$(this).closest(".carousel").hasClass("a03b")) {
                setColor($(this), $(this).find(`[data-slick-index=${nextSlide}]`).data('color'));
            }
            $(this).find(`[data-slick-index=${currentSlide}]`).removeClass("show-content");
        }).on("afterChange", function (_event, _slick, currentSlide) {
            $(this).find(`[data-slick-index=${currentSlide}]`).addClass("show-content");
        })
    }
    const centerPadding = function () {
        const breakpoints = [767, 991, 1199];
        //$(w).width(); does not return the viewport width as related to the bootstrap breakpoints (as it excludes the the width of the scrollbars. The breakpoints include the total viewport width
        const windowWidthInner = w.innerWidth;
        const bodyWidth = d.body.clientWidth;
        const margin = 24;
        let imageWidth = 792;
        if (windowWidthInner > 0 && windowWidthInner <= breakpoints[0]) {
            //image width = 288, margin 24px
            imageWidth = 288;
        } else if (windowWidthInner > breakpoints[0] && windowWidthInner <= breakpoints[1]) {
            //image width = 528, margin 24px
            imageWidth = 528;
        }
        return (bodyWidth - imageWidth - margin) / 2
    }
    $(d).ready(function () {
        $('.a03').each(
            function () {
                const id = $(this).attr('id');
                init(id);
            }
        );
    });
    //trap resize and only trigger once stopped for 500ms
    let resizeVar,
        newWidth,
        windowWidth = w.innerWidth;
    $(w).on("resize orientationchange", function (event) {
        newWidth = w.innerWidth;

        clearTimeout(resizeVar);
        resizeVar = setTimeout(doneResizing, 500);
        if (event.type === "orientationchange") {
            //DO RESIZE HERE
            clearTimeout(resizeVar);
            resizeVar = setTimeout(doneResizing, 500);
            return false;
        } else {
            if ($.isMobile() && newWidth !== windowWidth) {
                //DO RESIZE HERE
                clearTimeout(resizeVar);
                resizeVar = setTimeout(doneResizing, 500);
                return false;
            }
            if (!$.isMobile()) {
                //DO RESIZE HERE
                clearTimeout(resizeVar);
                resizeVar = setTimeout(doneResizing, 500);
            }
        }
    });

    function doneResizing() {
        windowWidth = newWidth;
        $('.a03').each(
            function () {
                const id = $(this).attr('id');
                reinit(id);
            }
        );
    }

})(window, document, jQuery);;
(function (d) {
    function updateFilterText(elem) {
        elem.querySelector(".dropdown-toggle .filter-by").innerHTML = elem.querySelector(".dropdown-menu .active .filter-text").innerHTML;
    }
    d.addEventListener("DOMContentLoaded", function () {
        d.querySelectorAll(".a04").forEach(a04 => {
            //set default state;
            updateFilterText(a04);
            a04.querySelector(".nav-tabs").addEventListener("shown.bs.tab", function () {
                updateFilterText(a04);
            });
        });
    });
})(document);;
(function (w, d) {
    d.addEventListener("DOMContentLoaded", function () {
        d.querySelectorAll(".a08").forEach(a08 => {
            function setIndicatorWidth(scrollPos) {
                // Do something with the scroll position
                const scrollHeight = document.querySelector("body").scrollHeight - window.innerHeight;
                a08.querySelector(".indicator-active").style.width = scrollPos / scrollHeight * 100 + "%";
            }
            function closeDropdowns(elem) {
                elem.querySelectorAll(".dropdown-toggle.show").forEach((dropdownToggle) => {
                    bootstrap.Dropdown.getInstance(dropdownToggle).hide();
                });
            }
            function handleScrollDirection(down = false) {
                if (down) {
                    a08.classList.add("scroll-down");
                    closeDropdowns(a08);
                    return;
                }
                a08.classList.remove("scroll-down");
            }
            let lastKnownScrollPosition = 0;
            let ticking = false; //handle once per scroll event
            d.addEventListener('scroll', function () {
                if (w.scrollY > lastKnownScrollPosition) {
                    //scroll down
                    handleScrollDirection(true);
                } else {
                    //scroll up
                    handleScrollDirection(false);
                }
                lastKnownScrollPosition = w.scrollY;
                if (!ticking) {
                    w.requestAnimationFrame(function () {
                        setIndicatorWidth(lastKnownScrollPosition);
                        ticking = false;
                    });
                    ticking = true;
                }
            });
            w.addEventListener('resize', function () {
                closeDropdowns(a08);
            });
            setIndicatorWidth(window.scrollY);
        });
    });
})(window, document);;
(function (w, d, $) {
    const contentLoadedClass = "content-loaded";
    function ajax(dataToGet, elem, loadedClass, callback) {
        elem.classList.remove(loadedClass);
        scrollToTop();
        const ajaxUrl = "/api/sitecore/newsroom/archive";
        $.ajax({
            cache: true,
            type: "get",
            url: ajaxUrl,
            data: dataToGet,
            success: function (data) {
                try {
                    if (typeof data === "string" && data.startsWith("{")) {
                        data = JSON.parse(data);
                    }
                } catch (e) {
                    console.log(e);
                }
                //why two try catch
                try {
                    callback(data);
                } catch (e) {
                    console.log(e);
                    customError(elem, loadedClass);
                }
            },
            error: function () {
                customError(elem, loadedClass);
            }
        });
    }
    function routeUrl(elem) {
        const paramsObj = {};
        const searchParams = new URLSearchParams(window.location.search);
        clearRadioButtons(elem);
        //only add topic, contenttype, year and page to paramsObj to send to ajax get
        searchParams.forEach((value, key) => {
            if (key === "topic" || key === "contenttype" || key === "year") {
                //update radio buttons based on params
                try {
                    elem.querySelector(`.radio-button[name="${key}"][value="${value}"]`).checked = true;
                    paramsObj[key] = value;
                } catch (e) {
                    console.log(e);
                    elem.querySelector(`.radio-button[name="${key}"][id="all-${key}"]`).checked = true;
                }
                
            } else if (key === "page") {
                paramsObj[key] = value;
            }
            else if (key === "tags") {
                paramsObj[key] = value;
            }
        });
        ajax(paramsObj, elem, "content-loaded", function (data) {
            updateContent(elem, data);
        });

    }
    function clearRadioButtons(elem) {
        const radioButtons = elem.querySelectorAll(".newsroom-filter .radio-button");
        const radioButtonsAll = elem.querySelectorAll(".newsroom-filter .radio-button-all");
        radioButtons.forEach(radioButton => {
            radioButton.checked = false;
        });
        radioButtonsAll.forEach(radioButton => {
            radioButton.checked = true;
        });
    }
    function updateParams(params) {
        if ('URLSearchParams' in window) {
            const searchParams = new URLSearchParams(window.location.search);            
            searchParams.delete("page");
            searchParams.delete("topic");
            searchParams.delete("contenttype");
            searchParams.delete("year");
            if (params && Object.keys(params).length !== 0) {
                Object.keys(params).forEach(key => {
                    searchParams.set(key, params[key])
                });
            }
           const newRelativePathQuery = window.location.pathname + (searchParams.toString() ? '?' + searchParams.toString() : "");
           updateParsely(window.location.href, newRelativePathQuery);
           history.pushState(null, '', newRelativePathQuery);
        }
    }
    function updateParsely(referer, relativePathQuery) {
        try {
          if (PARSELY.beacon) {
            PARSELY.beacon.trackPageView({
              url: location.origin + relativePathQuery,
              urlref: referer,
              js: 1
            });
          }
        } catch (e) {
          console.log(e);
        }
    }
    function customError(elem, loadedClass, message = "<p>An error has occured. Please refresh the browser and try again.</p>") {
        elem.classList.remove(loadedClass);
        elem.querySelector(".error-content").innerHTML = "";
        const errorContent = document.createElement("p");
        errorContent.innerHTML = `${message}`;
        elem.querySelector(".error-content").appendChild(errorContent);
        elem.classList.add(loadedClass);
    }
    function scrollToTop() {
        //scroll to top
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }
    function updateCanonicalURL(newUrl) {
        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (!canonicalLink) {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute("href", newUrl);
    }

    function loadPage(elem, pageNumber) {
        if ('URLSearchParams' in window) {
            const paramsObj = {};
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.set("page", pageNumber);
            const newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
            updateParsely(window.location.href, newRelativePathQuery);
            updateCanonicalURL(window.location.origin + newRelativePathQuery); 
            history.pushState(null, '', newRelativePathQuery);
            for (const [key, value] of searchParams.entries()) {
                if (key === "topic" || key === "contenttype" || key === "year" || key === "page" || key === "tags") {
                    paramsObj[key] = value;
                } 
            }
            ajax(paramsObj, elem, contentLoadedClass, function (data) {
                updateContent(elem, data);
            });
        }
    }
    function renderPageItem(paginationContainer, pageNumber, numberOfPages, currentPage) {
        const pageItemTemplate = paginationContainer.querySelector('.page-item-template').content.firstElementChild.cloneNode(true);
        pageItemTemplate.querySelector(".page-number").innerHTML = pageNumber;
        pageItemTemplate.querySelector(".page-link").dataset.cvxPage = pageNumber;
        pageItemTemplate.querySelector(".total-pages").innerHTML = ` of ${numberOfPages}`;
        if (pageNumber === currentPage) {
            pageItemTemplate.classList.add("active");
        }
        paginationContainer.querySelector(".pagination").appendChild(pageItemTemplate);
    }
    function renderMiddlePageItems(paginationContainer, currentPage, pageNumberItemsToShow, numberOfPages) {

        //loop through pages 2 through second to last page
        for (let pageNumber = 2; pageNumber <= numberOfPages - 1; pageNumber++) {
            let pageNumberItemsToShowOffsetLeft = (pageNumberItemsToShow - 1) / 2;
            let pageNumberItemsToShowOffsetRight = (pageNumberItemsToShow - 1) / 2;
            //Handle first and last pages if current page is between number to show and end
            if (currentPage < pageNumberItemsToShow) {
                pageNumberItemsToShowOffsetLeft = currentPage - 1;
                pageNumberItemsToShowOffsetRight = pageNumberItemsToShow - pageNumberItemsToShowOffsetLeft;
            } else if (currentPage >= numberOfPages - pageNumberItemsToShowOffsetRight) {
                pageNumberItemsToShowOffsetRight = numberOfPages - currentPage;
                pageNumberItemsToShowOffsetLeft = pageNumberItemsToShow - pageNumberItemsToShowOffsetRight;
            }
            //render pages to show based on position from above
            if (pageNumber >= currentPage - pageNumberItemsToShowOffsetLeft && pageNumber <= currentPage + pageNumberItemsToShowOffsetRight) {
                renderPageItem(paginationContainer, pageNumber, numberOfPages, currentPage);
            }
        }
    }
    function ellipsisCheck(paginationContainer, currentPage, windowWidth, pageNumberItemsToShow, numberOfPages, position) {
        switch (position) {
            case "before":
                if (currentPage > (windowWidth >= 768 ? pageNumberItemsToShow - 1 : pageNumberItemsToShow)) {
                    renderEllipsis(paginationContainer);
                }
                break;
            case "after":
                if ((windowWidth >= 768 ? currentPage + pageNumberItemsToShow - 1 : currentPage + pageNumberItemsToShow) <= numberOfPages) {
                    renderEllipsis(paginationContainer);
                }
                break;
        }
    }
    function renderEllipsis(paginationContainer) {
        const ellipsisTemplate = paginationContainer.querySelector('.ellipses-template').content.firstElementChild.cloneNode(true);
        paginationContainer.querySelector(".pagination").appendChild(ellipsisTemplate);
    }
    function handlePageClick(elem, pageLink, paginationContainer, numberOfPages) {
        const activePage = parseInt(paginationContainer.querySelector(".active > .page-link").dataset.cvxPage)
        let pageToLoad = pageLink.dataset.cvxPage;
        if (pageToLoad === "next" && activePage < numberOfPages) { pageToLoad = activePage + 1; }
        if (pageToLoad === "prev" && activePage > 1) { pageToLoad = activePage - 1; }
        loadPage(elem, pageToLoad);
    }
    function handlePagination(elem, data) {
        const paginationContainer = elem.querySelector(".pagination-container");
        const windowWidth = window.innerWidth;
        const pageNumberItemsToShow = windowWidth >= 768 ? 5 : 3;
        paginationContainer.querySelector(".pagination").innerHTML = "";
        const count = parseInt(data.info.count, 10);
        const pageSize = parseInt(data.info.pagesize ? data.info.pagesize : 8, 10);
        if (count > pageSize) {
            //Start pagination
            const numberOfPages = Math.ceil(count / pageSize);
            const currentPage = parseInt(data.info.page, 10);
            const previousTemplate = paginationContainer.querySelector('.skip-to-previous-template').content.firstElementChild.cloneNode(true);
            if (currentPage === 1) {
                previousTemplate.classList.add("disabled");
            }
            paginationContainer.querySelector(".pagination").appendChild(previousTemplate);
            //page 1 always renders
            renderPageItem(paginationContainer, 1, numberOfPages, currentPage);
            ellipsisCheck(paginationContainer, currentPage, windowWidth, pageNumberItemsToShow, numberOfPages, "before");
            renderMiddlePageItems(paginationContainer, currentPage, pageNumberItemsToShow, numberOfPages);
            ellipsisCheck(paginationContainer, currentPage, windowWidth, pageNumberItemsToShow, numberOfPages, "after");
            //last page always renders
            renderPageItem(paginationContainer, numberOfPages, numberOfPages, currentPage);
            const nextTemplate = paginationContainer.querySelector('.skip-to-next-template').content.firstElementChild.cloneNode(true);
            if (currentPage === numberOfPages) {
                nextTemplate.classList.add("disabled");
                nextTemplate.querySelector(".page-link").disabled = true;
            }
            paginationContainer.querySelector(".pagination").appendChild(nextTemplate);
            paginationContainer.querySelectorAll(".page-link").forEach(pageLink => {
                const pageValue = pageLink.getAttribute('data-cvx-page');
                pageLink.setAttribute('href', `archive?page=${encodeURIComponent(pageValue)}`);
                pageLink.addEventListener("click", function (e) {
                    e.preventDefault();
                    handlePageClick(elem, pageLink, paginationContainer, numberOfPages);
                });
            });
        }

    }
    function pagination(elem, data) {

        let ro = new ResizeObserver(function () {
            handlePagination(elem, data);
        });
        ro.observe(d.body);
        handlePagination(elem, data);
    }
    function handleArticle(elem, contentContainer, group) {
        if (group.articles && group.articles.length > 0) {
            const listTemplate = elem.querySelector('.list-template').content.firstElementChild.cloneNode(true);
            group.articles.forEach(article => {
                const listItemTemplate = elem.querySelector('.list-item-template').content.firstElementChild.cloneNode(true);
                listItemTemplate.querySelector(".secondary-link").href = article.link.url;
                if (article.isexternalarticle)
                {
                    listItemTemplate.querySelector(".secondary-link").target = "_blank";
                    if (article.newssource !== null && article.newssource !== "") {
                        listItemTemplate.querySelector(".category").innerHTML = article.newssource;
                    } else {
                        listItemTemplate.querySelector(".category").remove();
                    }                   
                }
                else if (article.contenttype !== "event" && article.topic !== null && article.topic !== "" && !article.hidetopic) {
                    listItemTemplate.querySelector(".category").innerHTML = article.topic;
                } else {
                    listItemTemplate.querySelector(".category").remove();
                }
                listItemTemplate.querySelector(".news-text").innerHTML = article.link.text;
                listItemTemplate.querySelector(".date").innerHTML = article.date;               
                if (article.image.src !== null && article.image.src !== "") {
                    listItemTemplate.querySelector(".image-container").style.backgroundImage = `url('${article.image.src}')`;
                }
               
                listTemplate.appendChild(listItemTemplate);

            });
            contentContainer.appendChild(listTemplate);
        }
    }
    function handleContent(elem, contentContainer, data) {
        if (data.groups && data.groups.length > 0) {
            data.groups.forEach(group => {
                //handle group date
                if (group.date) {
                    const dateHeaderTemplate = elem.querySelector('.header-template').content.firstElementChild.cloneNode(true);
                    dateHeaderTemplate.innerHTML = group.date;
                    contentContainer.appendChild(dateHeaderTemplate);
                }
                //handle articles

                handleArticle(elem, contentContainer, group);

            });
        }
    }
    function updateContent(elem, data) {
        const paginationContainer = elem.querySelector(".pagination-container");
        paginationContainer.querySelector(".pagination").innerHTML = "";
        const contentContainer = elem.querySelector(".content-container");
        contentContainer.innerHTML = "";
        if (data.info.count && data.info.count > 0) {
            //show pagination
            pagination(elem, data);
            handleContent(elem, contentContainer, data);
        } else {
            contentContainer.innerHTML = `<p>${data.info.message}</p>`
        }
        elem.classList.add(contentLoadedClass);
    }
    d.addEventListener("DOMContentLoaded", function (_event) {
        d.querySelectorAll(".a11").forEach(a11 => {
            //get queryParams, set ajaxUrl and set button states
            w.addEventListener('popstate', () => {
                routeUrl(a11);
            });
            routeUrl(a11);
            //handle initial load   
            const a11RadioButtons = a11.querySelectorAll(".radio-button");
            a11RadioButtons.forEach(radioButton => {
                radioButton.addEventListener("change", function () {
                    //if page is set delete
                    const dataToGet = Array.from(a11.querySelectorAll(".radio-button:checked")).reduce(function (previous, next) {
                        if (next.value !== null && next.value !== "") {
                            previous[next.name] = next.value;
                        } 
                        return previous;
                    }, {});
                    const searchParams = new URLSearchParams(window.location.search);
                    if (searchParams.has("tags")) {
                        dataToGet["tags"] = searchParams.get("tags");
                    }
                    ajax(dataToGet, a11, contentLoadedClass, function (data) {
                        updateParams(dataToGet);
                        updateContent(a11, data);
                    });
                });
            });

            a11.querySelector(".reset-all").addEventListener("click", function (e) {
                e.preventDefault();
                const dataToGet = {};
                const searchParams = new URLSearchParams(window.location.search);
                if (searchParams.has("tags")) {
                    dataToGet["tags"] = searchParams.get("tags");
                }
                ajax(dataToGet, a11, contentLoadedClass, function (data) {
                    updateParams();
                    clearRadioButtons(a11);
                    updateContent(a11, data);
                });
            });
        });
    });
})(window, document, jQuery);;
(function (d, $) {
    const a13CookieName = "a13Cookie";
    const otBannerSelector = "#onetrust-banner-sdk";
    const a13Selector = ".a13";
    const checkInterval = 10000; // 10 seconds

    // Function to check if the A13 cookie is set
    const isCookieSet = () => d.cookie && d.cookie.indexOf(a13CookieName) >= 0;

    // Function to set the A13 cookie with a 6-month expiration
    const setA13Cookie = function () {
        const expires = new Date();
        expires.setMonth(expires.getMonth() + 6); // Expire after 6 months
        d.cookie = `${a13CookieName}=true; expires=${expires.toUTCString()}; path=/`;
    };

    // Function to check the visibility of the OT banner
    const checkOTBanner = function () {
        const otBanner = $(otBannerSelector);
        if (otBanner.length && otBanner.is(":visible")) {
            // If the OT banner is visible, recheck after 10 seconds
            setTimeout(checkOTBanner, checkInterval);
        } else {
            // If the OT banner is hidden, show the A13 modal
            showA13Modal();
        }
    };

    // Function to show the A13 modal
    const showA13Modal = function () {
        $(a13Selector).each(function () {
            const $a13Modal = $(this);
            if (!isCookieSet()) {
                // Attach event to set cookie when modal is closed
                $a13Modal.on("hidden.bs.toast", function () {
                    setA13Cookie();
                });

                // Attach event to close modal on button click
                $a13Modal.find(".primary-link .link").on("click", function () {
                    $a13Modal.toast("hide");
                });

                // Show the modal
                $a13Modal.toast("show");
            }
        });
    };

    // Initialize the logic
    $(d).ready(function () {
        if (!isCookieSet()) {
            // Start checking the OT banner
            setTimeout(checkOTBanner, checkInterval);
        }
    });
})(document, jQuery);;
(function (w, d, $) {
    function secondaryTopPosition($this) {
        const heroContentHeight = $this.find(".hero-content").height(),
            primaryHeight = $this.find(".primary .header").height() + $this.find(".primary .focus-link-container").height();
        //set height of secondary-link 
        $this.find(".secondary-container").css("top", primaryHeight + (heroContentHeight - primaryHeight) / 2 + 10 + "px");
    }
    $(d).ready(function () {
        $(".c01a.has-bg-img").each(function () {
            const $this = $(this);
            secondaryTopPosition($this);
            setTimeout(function () {
                $this.find(".inner-container").addClass("animation-complete");
            }, 1000);
        });
        $(w).resize(function () {
            $(".c01a.has-bg-img").each(function () {
                secondaryTopPosition($(this));
            });
        });
    });
})(window, document, jQuery);;
(function (w, d, $) {
    let slidesPerRow = 1;
    let slidesToScroll = 1;
    let slidesToShow = 1;
    function reinit(id) {
        $("#" + id + " .slider").slick("unslick");
        $("#" + id + " .slider-bg").slick("unslick");
        init(id);
    }

    
    function init(id) {        
        $("#" + id + " .slider").slick({
            slide: "#" + id + " .slider .item",
            accessibility: true,
            focusOnChange: true,
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next"><span class="glyphicon glyphicon-chevron-caret-right" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous"><span class="glyphicon glyphicon-chevron-caret-left" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button>',
            slidesPerRow: slidesPerRow,
            slidesToScroll: slidesToScroll,
            slidesToShow: slidesToShow,
            //dots: true,
            infinite: false,
            speed: 450,
            asNavFor: $("#" + id + " .slider-bg")
        });
        $("#" + id + " .slider-bg").slick({
            slide: "#" + id + " .slider-bg .item",
            //accessibility: false,
            accessibility: true,
            focusOnChange: true,
            arrows: false,
            slidesPerRow: slidesPerRow,
            slidesToScroll: slidesToScroll,
            slidesToShow: slidesToShow,
            infinite: false,
            speed: 850,
            dots: false,
            centerMode: false,
            asNavFor: $("#" + id + " .slider")
        });
    }

    $(d).ready(function () {
        $('.c01c').each(
            function () {
                const id = $(this).attr('id');
                init(id);
                $.carouselInitTrack(id);
            }
        );

        $('.c01c .slider').on('beforeChange', function (event, _slick, _currentSlide, nextSlide) {
            $.carouselMoveTrack($(event.currentTarget).closest(".c01c").attr("id"), nextSlide);
        });

        let resizeVar,
            newWidth,
            windowWidth = w.innerWidth;
        $(w).on("resize orientationchange", function (event) {
            newWidth = w.innerWidth;
            if (event.type === "orientationchange") {
                //DO RESIZE HERE
                clearTimeout(resizeVar);
                resizeVar = setTimeout(doneResizing, 500);
                return false;
            } else {
                if ($.isMobile() && newWidth !== windowWidth) {
                    //DO RESIZE HERE
                    clearTimeout(resizeVar);
                    resizeVar = setTimeout(doneResizing, 500);
                    return false;
                }
                if (!$.isMobile()) {
                    //DO RESIZE HERE
                    clearTimeout(resizeVar);
                    resizeVar = setTimeout(doneResizing, 500);
                }
            }
        });

        function doneResizing() {
            windowWidth = newWidth;
            $('.c01c').each(
                function () {
                    const id = $(this).attr('id');
                    reinit(id);
                    $.carouselInitTrack(id);
                    $.carouselMoveTrack(id, 0);
                }
            );
        }
    });

})(window, document, jQuery);;
(function (d) {
    function setButton(button, video) {
        if (video.paused) {
            button.classList.add("paused");
            return;
        }
        button.classList.remove("paused");
    }
    function toggleVideo(button, video) {
        if (video.paused) {
            video.play();
            setButton(button, video);
            return;
        }
        video.pause();
        setButton(button, video);
    }
    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    target.classList.add("in");
                    //only trigger once
                    observer.unobserve(target);
                }
            });
        },
        { rootMargin: "0% 0px 0% 0px", threshold: [0.0] }
    );
    d.addEventListener("DOMContentLoaded", function (_event) {
        d.querySelectorAll(".c01f").forEach((c01f) => {
            const video = c01f.querySelector(".video");
            const button = c01f.querySelector(".play-pause-button");
            if (video) {
                button.addEventListener("click", function () {
                    toggleVideo(this, video);
                });
                video.addEventListener("ended", function () {
                    setButton(button, this);
                });
            }
            //trigger initial animation when in view
            observer.observe(c01f);
        });

    });
})(document);
;
(function (d, w) {
    function setVideos(video) {
        mediaCommonNamespace.setMedia(video);
        mediaCommonNamespace.setMediaEventListenters(video, video.closest(".inner-container").querySelector(".play-pause-button"));
        video.play();
    }

    d.addEventListener("DOMContentLoaded", function (_event) {
        d.querySelectorAll(".c01r").forEach((module) => {
            //check if first module using navigation.js added class
            const video = module.querySelector(".video");
            if (video != null) {
                setVideos(video);
            }
            function debounce(func, timeout = 300) {
                let timer;
                return (...args) => {
                    clearTimeout(timer);
                    timer = setTimeout(() => {
                        func.apply(this, args);
                    }, timeout);
                };
            }
            let windowWidth = w.innerWidth;
            w.addEventListener("resize",
                debounce(() => {
                    const newWidth = w.innerWidth;
                    //prevent mobile browsers from triggering due to browser height change on scroll
                    if (newWidth !== windowWidth) {
                        if (video != null) {
                            mediaCommonNamespace.setMedia(video);
                        }
                        windowWidth = newWidth;
                    }
                })
            );
        });

    });
})(document, window);
;
(function (w, d, $) {
    function init(id) {
        $("#" + id + " .slider").on("init", function () {
            $(this).css("height", "auto").css("overflow", "visible");
        })
        .slick({
            slide: "#" + id + " .slider > .item",
            accessibility: false,
            arrows: true,
            appendArrows: "#" + id + " .arrows",
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button>',
            slidesPerRow: 1,
            slidesToScroll: 1,
            slidesToShow: 1
        });
    }

    function paging(id) {
        const total = $("#" + id + " .item:not(.slick-cloned)").length;
        const currentSlide = $("#" + id + " .slider").slick('slickCurrentSlide');
        const page = 1 + currentSlide;
        //Only show paging if there are more than one slide
        if (total > 1) {
            $("#" + id + " .paging").html('<span class="slide-count num dark-gray">' + page + ' of ' + total + '</span>').closest(".control").removeClass("hidden");
        } else {
            $("#" + id + " .paging").find('.slide-count').remove().closest(".control").addClass("hidden");
        }
    }


    function c11LinkedCardInit($elem) {
        if ("IntersectionObserver" in w && "IntersectionObserverEntry" in w && "intersectionRatio" in w.IntersectionObserverEntry.prototype) {
            const c11LinkedCardObserver = new IntersectionObserver(function (entries) {
                if (entries[0].isIntersecting === true) {
                    $elem.addClass("animate-in");
                }
            }, { threshold: [0] });
            c11LinkedCardObserver.observe($elem.closest(".c11")[0]);
        } else {
            // Fallback for IE and older browsers
                $elem.addClass("animate-in");
        }
    }

    $(d).ready(function () {
        let itemIndex = 0;
        $(".c11").each(function () {
            const $modalCarouselContent = $(this).find(".modal-carousel-content");
            if ($modalCarouselContent.length) {
                const id = $(this).attr('id'),
                    modalTemplate = '' +
                '<div class="modal-container">' +
                '  <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">' +
                '      <div class="modal-dialog">' +
                '          <div class="modal-content">' +
                '              <div class="modal-header">' +
                '                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                '               </div>' +
                '               <div class="modal-body">' +
                '                   <div id="modal-carousel" class="modal-carousel carousel-common numbering">' +
                '                       <div class="row slider">' +
                '                       </div>' +
                '                       <div class="control centered simple-arrows hidden">' +
                '                           <div class="arrows"></div>' +
                '                           <div class="paging vertical-align"></div>' +
                '                       </div>' +
                //'                       <div class="slider-cover"></div>' +
                '                   </div>' +
                '               </div>' +
                '           </div>' +
                '       </div>' +
                '   </div>' +
                '</div>',
                ariaLabel = $(this).children("h1, h2, h3, h4, h5, h6").text() ? $(this).children("h1, h2, h3, h4, h5, h6").text() : id,
                $modalString = $($.parseHTML(modalTemplate));
                $modalString.find(".modal").attr("id", "modal-" + id).attr("aria-label", ariaLabel).find(".modal-carousel").attr("id", "modal-carousel-" + id);
                $modalCarouselContent.each(function () {
                    $(this).closest(".card-carousel-item").find(".card-item-content .link > a").attr("href", "#modal-" + id).attr("data-item-index", itemIndex).click(function (e) {
                        e.preventDefault();
                        //Slick will not fully load when the modal is hidden. By setting modal height to 0, then showing modal we can then slide the carousel causing it to initialize the slides. Then set height back to auto after delay.
                        $("#modal-" + id).css("height", "0");
                        $("#modal-" + id).modal("show").find(".modal-carousel .slider").slick("slickGoTo", parseInt($(this).data("item-index")));
                        setTimeout(function () {
                            $(w).trigger('resize');
                            $("#modal-" + id).css("height", "auto");
                        }, 250);
                    });
                    itemIndex++;
                    $modalString.find('.modal-body .slider').append($(this));
                });
                $(this).append($modalString);
            }
        });

        //Adjust paging when slider changes
        $('.modal-carousel .slider').on('afterChange', function (event) {
            paging(event.currentTarget.parentElement.id);
        });
             
        //Initialize Slider on load
        $('.modal-carousel').each(function () {
            const id = $(this).attr('id');
            init(id);
            paging(id);
        });

        $(".c11 .linked-card-item").each(function () {
            c11LinkedCardInit($(this));
        });

        $(".c11 .linked-card-item .match-height").matchHeight({
            byRow: true
        });


    });
})(window, document, jQuery);;
(function (d) {
    d.addEventListener("DOMContentLoaded", function () {
        d.querySelectorAll(".c12 .scroll-container").forEach(c12 => {
            try {
                new PerfectScrollbar(c12, {
                    wheelSpeed: 0.5,
                    wheelPropagation: false
                });
            } catch (e) {
                //empty
            }
        });
    });
})(document);;
(function (w, d) {
    function setVideos(videos) {
        videos.forEach(video => {
            const button = video.closest(".video-container").querySelector(`.play-pause-button`);
            mediaCommonNamespace.setMedia(video);
            mediaCommonNamespace.setMediaEventListenters(video, button);
        });
    }
    function handleVideos(module, play) {
        const videos = module.querySelectorAll(".video");
        if (videos && play) {
            videos.forEach(video => {
                video.play();
            });
        } else if (videos && !play) {
            videos.forEach(video => {
                video.pause();
            });
        }
    }
    let observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting === true) {
                    handleVideos(entry.target, true);
                } else {
                    handleVideos(entry.target, false);
                }
            });
        })
    d.addEventListener("DOMContentLoaded", function () {
        d.querySelectorAll(".c17e").forEach(module => {
            const videos = module.querySelectorAll(".video");
            if (videos != null) {
                setVideos(videos);
            }
            observer.observe(module);
        });
    });
})(window, document);;
(function (w, d, $) {
    $(d).ready(function () {
        const mobileBreakpoint = 992;
        $(".c18b .video-link").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            const itemIndex = $(this).closest(".thumb-container").data("item-index"),
                $videoParent = $(this).closest(".c18b");
            $videoParent.find(".active").removeClass("active");
            
            $videoParent.find(".col-content .content-" + itemIndex).addClass("active");
            $videoParent.find(".col-thumbs .thumb-" + itemIndex).addClass("active");
            if (w.innerWidth >= mobileBreakpoint) {
                $videoParent.find(".col-thumbs").scrollTo($(this).closest(".thumb-container"), 800, { axis: 'y' });
            }
        });

        thumbHeight();
        $(w).resize(function () {
            thumbHeight();
        });

        function thumbHeight() {
            if (w.innerWidth >= mobileBreakpoint) {
                $(".c18b").each(function () {
                    const height = $(this).find(".col-content .active .match-thumb-container-height").height() - 30;
                    $(this).find(".col-thumbs").css("max-height", height);
                });
            } else {
                $(".c18b").each(function () {
                    $(this).find(".col-thumbs").css("max-height", "");
                });
            }
        }
    });
})(window, document, jQuery);;
(function (d, $) {
    $(d).ready(function () {
        function getFileType(contentType) {
            if (contentType) {
                contentType = contentType.split("/").pop();
                contentType = (contentType === "jpeg" ? "jpg" : contentType);
                contentType = "/" + contentType;
            } else {
                contentType = "";
            }
            return contentType;
        }
        $('.c26.box').each(function () {
            const id = $(this).attr('id');
            const $this = $("#" + id);
            if ($this.hasClass("modal-body-content")) {
                $this.closest('.modal-container').addClass('c26-container');
            }
            $this.find('button.btn-secondary').each(function () {
                const buttonElement = $(this);
                const url = buttonElement.attr("data-url");
                const xhr = $.ajax({
                    type: "HEAD",
                    url: url,
                    success: function (_data) {
                        let size = xhr.getResponseHeader('Content-Length');
                        let type = getFileType(xhr.getResponseHeader('Content-Type'));
                        buttonElement.attr("data-size", buttonElement.attr("data-size") + " (" + (size / 1024).toFixed(0) + " KB" + type + ")");
                        $this.find('button.btn-secondary').first().click();
                    }
                });
            });
            $this.find('button.btn-secondary').click(this, function () {
                $(this).parent().find(".btn-secondary").removeClass("active");
                $(this).addClass("active");
                $this.find('div.file-info').text($(this).attr("data-size"));
                const activeUrl = encodeURI($(this).parents(".form").find("button.btn-secondary.active").attr("data-url"));
               $(this).parents(".form").find("a.download-link")[0].setAttribute("href", activeUrl);
            });
        })
    });
})(document, jQuery);
;
(function (d, $) {
    $(d).ready(function () {
        //keep cols same height
        $(".c27 .match-height").matchHeight({
            byRow: true
        });
    });
})(document, jQuery);;
(function (d, $) {
    function debounce(callback, wait = 300) {
        let timeoutId = null;
        return (...args) => {
            window.clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => {
                callback.apply(this, args);
            }, wait);
        };
    }
    function handleLinkAction(link) {
        link.click();
    }
    const db = debounce(handleLinkAction, 250);
    $(d).ready(function () {
        $(".c28").each(function () {
            const $c28 = $(this);
            //mobile arrows activate on spacebar press
            $c28.find(".collapse-link").on("keydown", function (e) {
                const keyCode = e.keyCode || e.which,
                    $target = $(e.target);
                if (keyCode === 32) {
                    e.preventDefault();
                    $target.click();
                }
            }).on("mouseenter focusin", function () {
                db(this);
            });

        });
    });
})(document, jQuery);;
(function (w, d, $) {
    function setMainContainerWidth() {
        $(".c39").each(function () {
            const $this = $(this);
            $this.find(".main-container").css("max-width","");
            let width = 0;
            $this.find(".image-container img").each(function () {
                width = Math.max(width, $(this).width());
            });
            $this.find(".main-container").css("max-width", width + "px");
        });
    }
    $(d).ready(function () {
        $(".c39 .slider").on("input change", function () {
            const $c39 = $(this).closest(".c39");
            $c39.find(".image-top, .text-top").css("opacity", 1 - ($(this).val() / 100));
        });

        setMainContainerWidth();
        $(w).resize(function () {
            setMainContainerWidth();
        });
    });
})(window, document, jQuery);;
(function (w, d, $) {
    const itemStagger = .2;
    const duration = .8;
    const offsetY = 60;


    function transition(i, j, c40Elem) {
        if (this.parent.scrollTrigger === null || this.parent.scrollTrigger === undefined) return;

        let scrollTrigger = this.parent.scrollTrigger;

        if (i > 0 && j === 0) {
            if (scrollTrigger.direction === 1) {
                gsap.fromTo($(".circle-clear div:nth-child(" + i + ") .content-item", c40Elem), { y: 0, opacity: 1 }, { y: -scrollTrigger.direction * offsetY, opacity: 0, stagger: itemStagger, ease: Expo.easeOut, duration: duration });
                return;
            }
            gsap.fromTo($(".circle-clear div:nth-child(" + i + ") .content-item", c40Elem), { y: scrollTrigger.direction * offsetY, opacity: 0 }, { y: 0, opacity: 1, stagger: itemStagger, ease: Expo.easeOut, duration: duration });
        } else if (j > 0 && i === 0) {
            if (scrollTrigger.direction === 1) {
                gsap.fromTo($(".circle-clear div:nth-child(" + j + ") .content-item", c40Elem), { y: scrollTrigger.direction * offsetY, opacity: 1 }, { y: 0, opacity: 1, stagger: itemStagger, ease: Expo.easeOut, duration: duration });
                return;
            }
            gsap.fromTo($(".circle-clear div:nth-child(" + j + ") .content-item", c40Elem), { y: 0, opacity: 1 }, { y: -scrollTrigger.direction * offsetY, opacity: 0, stagger: itemStagger, ease: Expo.easeOut, duration: duration });
        } else if (i > 0 && i === j) {
            gsap.to($(".circle-clear div:nth-child(" + i + ") .content-item", c40Elem), { y: 0, opacity: 1, stagger: itemStagger, ease: Expo.easeOut, duration: duration });
        } else {
            if (scrollTrigger.direction === 1) {
                gsap.fromTo($(".circle-clear div:nth-child(" + i + ") .content-item", c40Elem), { y: 0, opacity: 1 }, { y: -scrollTrigger.direction * offsetY, opacity: 0, stagger: itemStagger, ease: Expo.easeOut, duration: duration });
                gsap.fromTo($(".circle-clear div:nth-child(" + j + ") .content-item", c40Elem), { y: scrollTrigger.direction * offsetY, opacity: 0 }, { y: 0, opacity: 1, stagger: itemStagger, ease: Expo.easeOut, duration: duration });
                return;
            }
            gsap.fromTo($(".circle-clear div:nth-child(" + i + ") .content-item", c40Elem), { y: scrollTrigger.direction * offsetY, opacity: 0 }, { y: 0, opacity: 1, stagger: itemStagger, ease: Expo.easeOut, duration: duration });
            gsap.fromTo($(".circle-clear div:nth-child(" + j + ") .content-item", c40Elem), { y: 0, opacity: 1 }, { y: -scrollTrigger.direction * offsetY, opacity: 0, stagger: itemStagger, ease: Expo.easeOut, duration: duration });
        }
    }

    function resetAnimation(c40Elem) {
        const container = $(c40Elem).find(".circle-animation")[0];
        if (container === undefined) return;
        gsap.to($(".circle-clear .content-item", c40Elem), { y: 0, opacity: 0, stagger: itemStagger, ease: Expo.easeOut, duration: 0.01 });
        gsap.to($(".circle-clear", c40Elem), { translateX: getComputedStyle(container).getPropertyValue('--circle-clear-init-x'), translateY: getComputedStyle(container).getPropertyValue('--circle-clear-init-y'), duration: .5 });
        gsap.to($(".circle-solid", c40Elem), { translateX: getComputedStyle(container).getPropertyValue('--circle-solid-init-x'), translateY: getComputedStyle(container).getPropertyValue('--circle-solid-init-y'), duration: .5 });
        gsap.to($(".circle-empty", c40Elem), { translateX: getComputedStyle(container).getPropertyValue('--circle-empty-init-x'), translateY: getComputedStyle(container).getPropertyValue('--circle-empty-init-y'), duration: .5 });
    }

    function initScene(c40Elem) {
        let tl = undefined;

        gsap.registerPlugin(ScrollTrigger);
        if (tl !== undefined) {
            resetAnimation(c40Elem);
            tl.pause(0);
            ScrollTrigger.getById("circle-animation-" + c40Elem.id).kill(true);
        }

        const mm = gsap.matchMedia();
            // desktop
        mm.add("(min-width: 992px)", function () {
            tl = gsap.timeline({
                scrollTrigger: {
                    id: "circle-animation-" + c40Elem.id,
                    trigger: $(".circle-wrapper", c40Elem),
                    scrub: 0.5,
                    start: "top top",
                    end: "+=400%",
                    pin: true,
                    markers: false,
                    invalidateOnRefresh: true,
                    anticipatePin: 1
                }
            });

            const contentCount = $(".circle-clear .content", c40Elem).length;
            tl.addLabel("start")
                .to($(".circle-clear", c40Elem), { duration: .01 })
                .call(transition, [1, 1, c40Elem]);

            for (let c = 1; c <= contentCount; c++) {
                tl.to($(".circle-clear", c40Elem), { duration: 1 })

                if (c !== contentCount) {
                    tl.call(transition, [c, c + 1, c40Elem]);
                } else {
                    tl.call(transition, [c, 0, c40Elem]);
                }
            }

            tl.to($(".circle-clear", c40Elem), { duration: .01 });

        });
        // mobile
        mm.add("(max-width: 991px)", function () {
            resetAnimation();
            tl = gsap.timeline({
                scrollTrigger: {
                    id: "circle-animation-" + c40Elem.id,
                    trigger: $(".circle-wrapper", c40Elem),
                    scrub: 1,
                    start: "top top",
                    end: "+=300%",
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true
                }
            });

            const contentCount = $(".circle-clear .content", c40Elem).length;
            tl.addLabel("start")
                .to($(".circle-clear", c40Elem), { duration: .01 })
                .call(transition, [1, 1]);

            for (let c = 1; c <= contentCount; c++) {
                tl.to($(".circle-clear", c40Elem), { duration: 1 })

                if (c !== contentCount) {
                    tl.call(transition, [c, c + 1]);
                } else {
                    tl.call(transition, [c, 0]);
                }
            }

            tl.to($(".circle-clear", c40Elem), { duration: .01 });

        });

        let ro = new ResizeObserver(function () {
            resetAnimation(c40Elem);
        });
        ro.observe(d.body);
    }


    $(d).ready(function () {
        $(w).on("load", function () {
            d.querySelectorAll(".c40").forEach((c40) => {
                initScene(c40);
            })
        });
    });
})(window, document, jQuery);;
(function (w, d, $) {
    $(d).ready(function () {
        $(w).on("load", function () {
            w.requestAnimationFrame(function () {
                $('.c41').each(function () {
                    const $quote = $(this);
                    const $text = $quote.find(".quote-text");

                    let chars = $text.text();
                    $text.html("");
                    let charIndex = 0;
                    const speed = 50;
                    let quoteInterval = 0;

                    const spanA = d.createElement("span");
                    spanA.classList.add("A");
                    spanA.classList.add("opaque");
                    $text.append($(spanA));

                    const spanB = d.createElement("span");
                    spanB.classList.add("B");
                    spanB.classList.add("transparent");
                    $text.append($(spanB));

                    const init = function () {
                        spanB.textContent = chars;
                    };
                    function start() {
                        quoteInterval = setInterval(function () {
                            spanA.textContent = chars.slice(0, charIndex + 1);
                            spanB.textContent = chars.slice(charIndex + 1, chars.length);
                            charIndex++;
                            if (charIndex > chars.length) {
                                clearInterval(quoteInterval);
                                pause();
                            }

                        }, speed);
                    }
                    function pause() {
                        spanA.classList.remove("transparent");
                        spanA.classList.add("opaque");
                        $quote.find('.stop-animation').hide();
                        $quote.addClass("animation-paused");
                        clearInterval(quoteInterval);
                    }
                    $quote.find('.stop-animation').on('click', function () {
                        pause();
                    });
                    init();

                    const checkElementIsInView = function (elem) {
                        const observer = new IntersectionObserver(function (entries) {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    start();
                                    //only trigger once
                                    observer.unobserve(elem);
                                }
                            });
                        }, { rootMargin: "50% 0px 50% 0px", threshold: [.25] });
                        observer.observe(elem);
                    };
                    checkElementIsInView($quote.find("blockquote")[0]);
                });
            });
        });

    });
})(window, document, jQuery);;
(function (w, d, $) {
    function init(container, cards) {
        const rangeSlider = container.closest(".c44").querySelector(".slider");
        const totalCards = cards.length;
        let sliderMax = (totalCards > 3 ? totalCards - 3 : totalCards);
        const winWidth = w.innerWidth;
        //for desktop if more than 3 cards set width of container to more than 100%.
        let containerWidth = (totalCards > 3 ? totalCards * 33.33 : 100);
        if (winWidth < 768) {
            sliderMax = (totalCards > 1 ? totalCards - 1 : totalCards);
            //for mobile if more than 2 cards set width of container to more than 100%.
            containerWidth = (totalCards > 1 ? totalCards * 100 : 100);
        } else if (winWidth >= 768 && winWidth < 992) {
            sliderMax = (totalCards > 2 ? totalCards - 2 : totalCards);
            //for tablet if more than 2 cards set width of container to more than 100%.
            containerWidth = (totalCards > 2 ? totalCards * 50 : 100);
        } 
        container.style.width = containerWidth + "%";
        rangeSlider.max = sliderMax;
        rangeSlider.style.setProperty(
            '--c44SlideThumbWidth',
            (1 / (sliderMax + 1) * 100) + "%"
        );
    }
    d.addEventListener("DOMContentLoaded", function () {
        $(".c44 .c44-flip-card .match-height").matchHeight({
            byRow: true
        });
        d.querySelectorAll(".c44").forEach(c44 => {
            const slider = c44.querySelector(".slide-scroll .slide-scroll-container");
            globalNamespace.makeHorizontalSliderDraggable(slider);
            c44.querySelectorAll(".c44-container").forEach(c44Container => {
                const c44Cards = c44Container.querySelectorAll(".c44-flip-card");
                let ro = new ResizeObserver(function () {
                    init(c44Container, c44Cards);
                    globalNamespace.initSlider(slider, false);
                });
                ro.observe(c44Container.closest(".c44"));
                init(c44Container, c44Cards);
                globalNamespace.initSlider(slider);
                c44Cards.forEach((c44Card, index) => {
                    c44Card.querySelector(".item").innerHTML = index + 1;
                    c44Card.querySelector(".total").innerHTML = c44Cards.length;

                    c44Card.querySelectorAll(".flip-action").forEach(flipAction => {
                        flipAction.addEventListener("click", e => {
                            e.preventDefault();
                            c44Card.classList.toggle("flipped");
                        });
                    });
                });
            });
        });
    });
})(window, document, jQuery);
;
(function (w, d) {
    const startAnimation = function (elm) {
        let count = elm.querySelector(".sequence");
        const classname = elm.dataset.classname;

        if (count.classList.contains(classname)) {
            // animation started already then return
            return;
        } else {
            count.classList.add(classname);
        }
    };

    const checkElementIsInView = function (elm) {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startAnimation(elm);
                        //only trigger once
                        observer.unobserve(elm);
                    }
                });
            },
            { rootMargin: "0% 0px 0% 0px", threshold: [0.85] }
        );
        observer.observe(elm);
    };

    d.addEventListener("DOMContentLoaded", function () {
        d.querySelectorAll(".c48 .animation").forEach((elm) => {
            const format = elm.dataset.format.trim();
            const sequence = elm.dataset.sequenceValues.split("|");

            w.requestAnimationFrame(function () {
                checkElementIsInView(elm);
            });

            const prefix = elm.querySelector(".prefix");
            const postfix = elm.querySelector(".postfix");
            const sequenceContainer = elm.querySelector(".sequence");
            const delimeter = "{x}";

            if (format.includes(delimeter)) {
                const formatArray = format.split(delimeter);

                prefix.innerHTML = formatArray[0];
                postfix.innerHTML = formatArray[1];
            } else {
                //if static value is provided then just show that
                postfix.innerHTML = format;
            }

            sequence.forEach((value) => {
                let num = d.createElement("div");
                num.innerHTML = value;

                sequenceContainer.appendChild(num);
            });
        });
    });
})(window, document);
;
(function (w, d) {
    const startAnimation = function (elem) {
        const sequenceContainer = elem.querySelector(".sequence");
        const classname = "start-animation";
        if (!sequenceContainer.classList.contains(classname)) {
            // animation started already then return
            sequenceContainer.classList.add(classname);
            return;
        } 
    };

    const checkElementIsInView = function (elem) {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startAnimation(elem);
                        //only trigger once
                        observer.unobserve(elem);
                    }
                });
            },
            { rootMargin: "0% 0px 0% 0px", threshold: [0.85] }
        );
        observer.observe(elem);
    };

    d.addEventListener("DOMContentLoaded", function () {
        d.querySelectorAll(".c48r .animation").forEach((elem) => {
            const format = elem.dataset.format.trim();
            const sequence = elem.dataset.sequenceValues.split("|");  
            const prefix = elem.querySelector(".prefix");
            const postfix = elem.querySelector(".postfix");
            const sequenceContainer = elem.querySelector(".sequence");
            sequenceContainer.closest(".sequence-window").style.setProperty("height", w.getComputedStyle(sequenceContainer).lineHeight);
            const iterator = sequence.length;
            const delimeter = "{x}";
            if (format && format.includes(delimeter)) {
                const formatArray = format.split(delimeter);
                prefix.innerHTML = formatArray[0];
                postfix.innerHTML = formatArray[1];
            } else {
                //if static value is provided then just show that
                postfix.innerHTML = format;
            }
            if (sequence) {
                if (iterator > 0) {
                    const rollDistance = parseFloat((100 - (100 / iterator)).toFixed(2));
                    sequenceContainer.style.setProperty('--roll-distance', `-${rollDistance}%`);
                }
                sequence.forEach((value) => {
                    let num = d.createElement("div");
                    num.innerHTML = value;
                    sequenceContainer.appendChild(num);
                });
            }
            w.requestAnimationFrame(function () {
                checkElementIsInView(elem);
            });
        });
    });
})(window, document);
;
(function (w, d) {
    d.addEventListener("DOMContentLoaded", function () {
        d.querySelectorAll(".c51").forEach(c51 => {
            globalNamespace.makeHorizontalSliderDraggable(c51.querySelector(".table-responsive"));
            const accordionItems = c51.querySelectorAll(".accord-item");
            c51.querySelectorAll(".collapse").forEach((collaspe, index) => {
                collaspe.addEventListener('show.bs.collapse', _event => {
                    const images = c51.querySelectorAll(".image-container .img-fluid");
                    images.forEach(image => {
                        image.classList.remove("show");
                    });
                    images[index].classList.add("show");
                });
            });
            const ro = new ResizeObserver(function () {
                if (w.innerWidth >= 768) {
                    accordionItems.forEach(accordionItem => {
                        const button = accordionItem.querySelector(".accord-button");
                        accordionItem.removeAttribute("role");
                        accordionItem.removeAttribute("tabindex");
                        accordionItem.classList.remove("show");
                        accordionItem.classList.remove("active");
                        button.removeAttribute("disabled");
                        button.removeAttribute("tabindex");
                    });
                    return false;
                }
                //mobile breakpointK
                const articeTabId = c51.querySelector(".tab-link.active").getAttribute("aria-controls");
                c51.querySelector(`#${articeTabId}`).classList.add("show", "active");
                accordionItems.forEach(accordionItem => {
                    const button = accordionItem.querySelector(".accord-button");
                    accordionItem.setAttribute("role", "tabpanel");
                    accordionItem.setAttribute("tabindex", "0");

                    button.setAttribute("disabled", "disabled");
                    button.setAttribute("tabindex", "-1");
                });
            });
            ro.observe(c51);
        });
    });
})(window, document);;
(function (w, d, $) {

    let slidesPerRow = 1;
    let slidesToScroll = 1;
    let slidesToShow = 1;
    function reinit(id) {
        $("#" + id + " .slider").slick("unslick");
        resize();
        init(id);
    }
    function init(id) {

        $("#" + id + " .slider").slick({
            slide: "#" + id + " .slider .item",
            accessibility: true,
            cvxAccessibilityOverride: true,
            focusOnChange: true,
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next"><span class="glyphicon glyphicon-chevron-caret-right" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous"><span class="glyphicon glyphicon-chevron-caret-left" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button>',
            slidesPerRow: slidesPerRow,
            slidesToScroll: slidesToScroll,
            slidesToShow: slidesToShow,
            //dots: true,
            infinite: false,
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 3, slidesPerRow: 1 } },
                { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3, slidesPerRow: 1 } },
                { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, slidesPerRow: 1 } }
            ]
        }).on("beforeChange", function (event, _slick, _currentSlide, nextSlide) {
            $.carouselMoveTrack($(event.currentTarget).closest(".n03").attr("id"), nextSlide);
        });
    }
    function resize() {
        const breakpoints = [767, 991, 1199];
        //$(w).width(); does not return the viewport width as related to the bootstrap breakpoints (as it excludes the the width of the scrollbars. The breakpoints include the total viewport width
        const winWidth = w.innerWidth;
        if (winWidth > 0 && winWidth <= breakpoints[0]) {
            slidesPerRow = 1;
            slidesToScroll = 1;
            slidesToShow = 1;
        } else {
            slidesPerRow = 1;
            slidesToScroll = 3;
            slidesToShow = 3;
        }
    }
    $(d).ready(function () {
        $('.n03').each(
            function () {
                const id = $(this).attr('id');
                resize();
                init(id);
                $.carouselInitTrack(id);
            }
        );
    });
    //trap resize and only trigger once stopped for 500ms
    let resizeVar,
        newWidth,
        windowWidth = w.innerWidth;
    $(w).on("resize orientationchange", function (event) {
        newWidth = w.innerWidth;
        if (event.type === "orientationchange") {
            //DO RESIZE HERE
            clearTimeout(resizeVar);
            resizeVar = setTimeout(doneResizing, 500);
            return false;
        } else {
            if ($.isMobile() && newWidth !== windowWidth) {
                //DO RESIZE HERE
                clearTimeout(resizeVar);
                resizeVar = setTimeout(doneResizing, 500);
                return false;
            }
            if (!$.isMobile()) {
                //DO RESIZE HERE
                clearTimeout(resizeVar);
                resizeVar = setTimeout(doneResizing, 500);
            }
        }
    });

    function doneResizing() {
        windowWidth = newWidth;
        $('.n03').each(
            function () {
                const id = $(this).attr('id');
                reinit(id);
                $.carouselInitTrack(id);
                $.carouselMoveTrack(id, 0);
            }
        );
    }

})(window, document, jQuery);
;
(function (d, $) {
    function setCookie(name, value) {
        d.cookie = name + "=" + value + "; expires=0";
    }

    function getCookie(name) {
        return (d.cookie.indexOf(name + '=') >= 0) ? new RegExp(name + '=([^ ;]+)', 'gi').exec(d.cookie)[1] : '';
    }

    function setView(view) {
        if (view === "list") {
            $("body, .s06-view").removeClass("grid").addClass("list");
            $(".s06-filter-bar .toggle-grid-view-grid").removeClass("selected");//.attr('aria-pressed', false)
            $(".s06-filter-bar .toggle-grid-view-list").addClass("selected");//.attr('aria-pressed', true)

        } else if (view === "grid") {
            $("body, .s06-view").removeClass("list").addClass("grid");
            $(".s06-filter-bar .toggle-grid-view-list").removeClass("selected");//.attr('aria-pressed', false)
            $(".s06-filter-bar .toggle-grid-view-grid").addClass("selected");//.attr('aria-pressed', true)
        }
    }

    $(d).ready(function () {
        const cname = "stories-view";
        if ($(".s06-filter-bar .toggle-grid-view-grid").length === 1) {
            let cvalue = "grid";
            if (getCookie(cname) === "list") cvalue = "list";
            setView(cvalue);
            setCookie(cname, cvalue);
        } else {
            setView("grid");
        }
        
        $(".s06-filter-bar .toggle-grid-view-grid").click(function (e) {
            e.preventDefault();
            setView("grid");
            setCookie(cname, "grid");
        });

        $(".s06-filter-bar .toggle-grid-view-list").click(function (e) {
            e.preventDefault();
            setView("list");
            setCookie(cname, "list");
        });
    });

})(document, jQuery);;
(function (d, $) {
    $(d).ready(function () {
        //keep cols same height
        $(".s07 .match-height").matchHeight({
            byRow: true
        });
    });
})(document, jQuery);;
(function (w, d, $) {
    let slidesPerRow = 1;
    let slidesToScroll = 1;
    let slidesToShow = 1;
    function reinit(id) {
        $("#" + id + " .slider .description").each(function () {
            //revert truncation
            if ($(this).hasClass("see-more-active")) {
                $(this).trunk8('revert').removeClass("see-more-active");
            }
        });
        $("#" + id + " .slider").slick("unslick");
        init(id);
    }

    
    function init(id) {        
        $("#" + id + " .slider").slick({
            slide: "#" + id + " .slider .item",
            accessibility: true,
            cvxAccessibilityOverride: true,
            focusOnChange: true,
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next"><span class="glyphicon glyphicon-chevron-caret-right" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous"><span class="glyphicon glyphicon-chevron-caret-left" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button>',
            slidesPerRow: slidesPerRow,
            slidesToScroll: slidesToScroll,
            slidesToShow: slidesToShow,
            //dots: true,
            infinite: false
        }).on("beforeChange", function (event, _slick, _currentSlide, nextSlide) {
            $.carouselMoveTrack($(event.currentTarget).closest(".x01").attr("id"), nextSlide);
        });
    }

    function resizeHandler() {
        let resizeVar,
            newWidth,
            windowWidth = w.innerWidth;
        $(w).on("resize orientationchange", function (event) {
            newWidth = w.innerWidth;
            if (event.type === "orientationchange") {
                //DO RESIZE HERE
                clearTimeout(resizeVar);
                resizeVar = setTimeout(doneResizing, 500);
                return false;
            } else {
                if ($.isMobile() && newWidth !== windowWidth) {
                    //DO RESIZE HERE
                    clearTimeout(resizeVar);
                    resizeVar = setTimeout(doneResizing, 500);
                    return false;
                }
                if (!$.isMobile()) {
                    //DO RESIZE HERE
                    clearTimeout(resizeVar);
                    resizeVar = setTimeout(doneResizing, 500);
                }
            }
        });

        function doneResizing() {
            windowWidth = newWidth;
            $('.x01').each(
                function () {
                    const id = $(this).attr('id');
                    reinit(id);
                    $.carouselInitTrack(id);
                    $.carouselMoveTrack(id, 0);
                }
            );
        }
    }
    $(d).ready(function () {
        $('.x01').each(
            function () {
                const id = $(this).attr('id');
                $("#" + id + " .slider").on('init', function () {
                    $(this).find(".text-container .description").each(function () {
                        const $desc = $(this),
                            descHeight = $desc.height(),
                            descScrollHeight = $desc.prop("scrollHeight"),
                            descLineHeight = parseInt($desc.css("line-height"), 10),
                            descTrunkLines = Math.floor(descHeight / descLineHeight);
                        if (descScrollHeight > descHeight) {
                            $desc.trunk8({
                                lines: descTrunkLines,
                                parseHTML: true,
                                fill: '<a href="#" class="see-more-link black body-2 bg-white"> &hellip; (see more)</a>',
                                tooltip: false
                            }).addClass("see-more-active");
                        }
                    });
                });
                init(id);
                $.carouselInitTrack(id);
            }
        );

        //See more link revert text
        $(".x01").on("click", ".see-more-link", function (e) {
            e.preventDefault();
            const $desc = $(this).closest(".description");
            $desc.trunk8('revert').removeClass("see-more-active");
            try {
                new PerfectScrollbar($desc[0], {
                    wheelSpeed: 0.5,
                    wheelPropagation: false
                });
            } catch (err) {
                //empty
            }
        }).on("keydown", ".see-more-link", function (e) {
            const keyCode = e.keyCode || e.which,
                $target = $(e.target);
            if (keyCode === 32) {
                e.preventDefault();
                $target.click();
            }
        }); 

        //Handle chapter landing slide links
        $('.x01 .chapter-slide-link').click(function (e) {
            e.preventDefault();
            const slideNum = $(this).data('slide');
            $(this).closest('.slider').slick('slickGoTo', slideNum);
        });
        resizeHandler();
    });

})(window, document, jQuery);;
(function (w, d, $) {
    $(d).ready(function () {
        if (w.location.hash) {
            const title = decodeURIComponent(w.location.hash.replace("#", ""));
            $('.x03 .panel a.collapsed[data-bs-toggle=collapse]').each(function() {
                if ($(this).find("h4").text().trim().toLowerCase() === title.trim().toLowerCase()) {
                    $(this).click();
                    $('html, body').animate({scrollTop: ($(this).offset().top - 150)}, 2000);
                }
            });
        }
        //drawer fix to allow spacebar keyboard navigation
        $(".x03").each(function () {
            //mobile arrows activate on spacebar press
            $(this).find(".panel-heading > a").on("keydown", function (e) {
                const keyCode = e.keyCode || e.which,
                    $target = $(e.target);
                if (keyCode === 32) {
                    e.preventDefault();
                    $target.click();
                }
            });
        });
    });
})(window, document, jQuery);
;
(function (d, $) {
    $(d).ready(function () {
        // fix to allow enter and spacebar keyboard navigation
        $(".x06b .social-icons-images a").each(function () {
            $(this).on("keydown", function (e) {
                const keyCode = e.keyCode || e.which,
                    $target = $(e.target);
                if (keyCode === 32) { // spacebar
                    e.preventDefault();
                    $target[0].click();
                }
            });
        });
    });
})(document, jQuery);;
(function (w, d, $) {
    function handleEachElement($elem) {
        // sets aria-selected //
        $elem.find('a[data-bs-toggle="tab"]').on('shown.bs.tab', function () {
            $(this).attr("aria-expanded", "").attr("aria-selected", "true");
        }).on('hidden.bs.tab', function () {
            $(this).attr("aria-expanded", "").attr("aria-selected", "false");
        });
        //tab/indicators activate with arrow keys
        $elem.find(".nav .secondary-link").on("keydown", function (e) { // Changed all instances of class .panel-link to .secondary-link
            const keyCode = e.keyCode || e.which,
                    $target = $(e.target);
                switch (keyCode) {
                    case 37:
                        //left arrow
                        e.preventDefault();
                        e.stopPropagation();
                        $target.closest(".nav").find(".secondary-link").attr("tabindex", "-1");
                        if ($target.closest("li").is(":first-child")) {
                            //first child go to last child
                            $target.closest(".nav").find("li").last().find(".secondary-link").attr("tabindex", "0").focus().click();
                        } else {
                            //not first child go to previous
                            $target.closest("li").prev().find(".secondary-link").attr("tabindex", "0").focus().click();
                        }
                        break;
                    case 39:
                    //right arrow
                    e.preventDefault();
                    e.stopPropagation();
                    $target.closest(".nav").find(".secondary-link").attr("tabindex", "-1");
                        if ($target.closest("li").is(":last-child")) {
                            //last child go to first child
                            $target.closest(".nav").find("li").first().find(".secondary-link").attr("tabindex", "0").focus().click();
                        } else {
                            //not last child go to next
                            $target.closest("li").next().find(".secondary-link").attr("tabindex", "0").focus().click();
                        }
                        break;
                }
            }).on("click", function (e) { 
                const $target = $(e.target);
                let $panelLink = $(e.target);
                if (!$panelLink.hasClass("secondary-link")) {
                    $panelLink = $target.closest(".secondary-link");
                }
                $panelLink.parent().children().attr("tabindex", "-1");
                $panelLink.attr("tabindex", "0");
            });

    }
    $(d).ready(function () {
        if (w.location.hash) {
            const title = w.location.hash.replace("#", "");
            $('[data-bs-toggle="tab"]').each(function () {
                if ($(this).text().toLowerCase() === title.toLowerCase()) {
                    $(this).tab("show");
                    $('html, body').animate({
                        scrollTop: $(this).offset().top
                    }, 2000);
                }
            });
        }
        $(".x09").each(function () {
            handleEachElement($(this));
        });
    });
})(window, document, jQuery);;
(function (w, d) {
    function setOffcanvasButtonText(moduleElem) {
        moduleElem.querySelector(".offcanvas-button .filter-by").innerHTML = moduleElem.querySelector(".offcanvas .cta-link.active .cta-underline").innerHTML;
    }

    function handleOffcanvasButtonText(moduleElem) {
        const tabs = moduleElem.querySelectorAll(".nav-link");
        tabs.forEach(tab => {
            tab.addEventListener("shown.bs.tab", () => {
                setOffcanvasButtonText(moduleElem);
                closeOffcanvas(moduleElem);
            });
        });        
    }
    function closeOffcanvas(moduleElem) {
        const offcanvas = moduleElem.querySelector(".offcanvas.show");
        if (offcanvas) {
            bootstrap.Offcanvas.getOrCreateInstance(offcanvas).hide();
        };
    }
    function handleHash(moduleElem) {
        if (w.location.hash) {
            const title = w.location.hash.replace("#", "");
            const tabButtons = moduleElem.querySelectorAll(".nav-link");
            tabButtons.forEach(tabButton => {
                if (tabButton.querySelector(".cta-underline").textContent.toLowerCase() === title.toLowerCase()) {
                    bootstrap.Tab.getOrCreateInstance(tabButton).show();
                    moduleElem.scrollIntoView();
                }
            });
        }
    }
    function handleParentShowClassOnOffcanvas(moduleElem) {
        const offcanvas = moduleElem.querySelector(".offcanvas");
        if (offcanvas) {
            offcanvas.addEventListener("show.bs.offcanvas", () => {
                moduleElem.classList.add("show");
            });
            offcanvas.addEventListener("hidden.bs.offcanvas", () => {
                moduleElem.classList.remove("show");
            });
        };
    }
    d.addEventListener("DOMContentLoaded", function () {
        d.querySelectorAll(".x09r").forEach(moduleElem => {
            handleHash(moduleElem);
            setOffcanvasButtonText(moduleElem);
            handleOffcanvasButtonText(moduleElem);
            handleParentShowClassOnOffcanvas(moduleElem);
            w.addEventListener('resize', function () {
                closeOffcanvas(moduleElem);
            });
        });
    });
})(window, document);;
if (window.PDFREPORT === null || window.PDFREPORT === undefined) {
    window.PDFREPORT = {
        SetFormAction: function (form, $) {
            let param = "";
            $(form).find('.downloads-card.checked').each(function () {
                param += $(this).data("value");
            })
            const url = "~/Reports/" + $(form).find("input[name=c]").val() + "/PDFReport.ashx";
            $(form).find("input[name=p]").val(btoa(param));
            $(form).attr("action", url);
            form.submit();
        }
    }
}


(function (w, d, $) {
    const totalFileSize = function () {
        let filesize = 0,
            count = 0;
        $('.x101 .checkbox-item-custom.checked').each(function () {
            count += 1;
            const sizetext = parseFloat($(this).data("filesize").toLowerCase().replace("mb", ""));
            filesize += sizetext;
        });
        if (count === 1) {
            $(".x101 .file-items").text("item");
        } else {
            $(".x101 .file-items").text("items");
        }
        if (count > 0) {
            $(".x101 .report-details").addClass('dl-sticky');
            $(".x101").closest("body").addClass('x101-page');
            $(".x101 .download-btn").prop('disabled', false);
        } else {
            $(".x101 .report-details").removeClass('dl-sticky');
            $(".x101").closest("body").removeClass('x101-page');
            $(".x101 .download-btn").prop('disabled', true);
        }
        
        $(".x101 .filesize").text(filesize.toFixed(2));
        $(".x101 .filecount").text(count);
    }
    function groupCheckbox($dlRow) {
        const $groupCheck = $dlRow.find(".checkbox-header-custom");
        if ($dlRow.find(".checkbox-item-custom").length === $dlRow.find(".checkbox-item-custom.checked").length) {
            $groupCheck.addClass('checked').attr("aria-checked", true);
        } else {
            $groupCheck.removeClass('checked').attr("aria-checked", false);
        }
    }
    function allCheckbox($downloadsView) {
        const $selectAll = $downloadsView.find(".select-all");
        if ($downloadsView.find(".checkbox-custom").length === $downloadsView.find(".checkbox-custom.checked").length) {
            $selectAll.addClass("clear-all").text("clear all");
        } else {
            $selectAll.removeClass("clear-all").text("select all");
        }
    }
    function truncate() {
        $('.x101 .download-desc').each(function () {
            const $desc = $(this),
                  textContainerHeight = $desc.closest(".text-container").height(),
                  descHeight = textContainerHeight - $desc.closest(".text-container").find(".checkbox").height(),
                  descLineHeight = parseInt($desc.css("line-height"), 10);
            let descTrunkLines = Math.floor(descHeight / descLineHeight),
                addBufferClass = false;
            $desc.removeClass("truncate").removeClass("buffer");
            if (descTrunkLines === 1) {
                addBufferClass = true;
            }
            //if $desc has html (and not just text) then add line
            if ($desc.children().length >= 1) {
                descTrunkLines += 1;
            }
            $desc.trunk8({
                lines: descTrunkLines,
                parseHTML: true,
                fill: '&hellip;',
                tooltip: false,
                onTruncate: function () {
                    $desc.addClass("truncate");
                    if (addBufferClass) {
                        $desc.addClass("buffer");
                    }
                }
            });
        });
    }
    function handleCheckboxCustomClick($elem) {
        $elem.click(function (e) {
            e.preventDefault();
            if ($(this).hasClass("disabled")) {
                return false;
            }
            if (!$(this).hasClass("checked") && !$(this).hasClass("disabled")) {
                $(this).addClass('checked').attr("aria-checked", true);
            } else {
                $(this).removeClass('checked').attr("aria-checked", false);
            }
            // Get the total file count and combined file size.
            try {
                groupCheckbox($(this).closest(".dl-row"));
                allCheckbox($(this).closest(".downloads-view"));
                totalFileSize();
            } catch (err) {
                console.log(err);
            }
        });
    }
    $(d).ready(function () {
        truncate();
        $(w).resize(function () {
            truncate();
        });
        $('.x101 .checkbox-custom').on("keydown", function (e) {
            const keyCode = e.keyCode || e.which,
                $target = $(e.target);
            if (keyCode === 32) {
                e.preventDefault();
                $target.click();
            }
        });
        handleCheckboxCustomClick($('.x101 .checkbox-item-custom'));
        $('.x101 .checkbox-header-custom').click(function (e) {
            e.preventDefault();
            if (!$(this).hasClass("checked") && !$(this).hasClass("disabled")) {
                $(this).addClass('checked').attr("aria-checked", true);
                $(this).closest(".dl-row").find(".downloads-list .checkbox-item-custom").each(function () {
                    $(this).addClass('checked').attr("aria-checked", true);
                });
            } else {
                $(this).removeClass('checked').attr("aria-checked", false);
                $(this).closest(".dl-row").find(".downloads-list .checkbox-item-custom").each(function () {
                    $(this).removeClass('checked').attr("aria-checked", false);
                });
            }
            // Get the total file count and combined file size.
            try {
                groupCheckbox($(this).closest(".dl-row"));
                allCheckbox($(this).closest(".downloads-view"));
                totalFileSize();
            } catch (err) {
                console.log(err);
            }
        });
        $('.x101 .select-all').click(function (e) {
            e.preventDefault();
            if ($(this).hasClass("clear-all")) {
                $('.x101 .checkbox-custom').removeClass('checked').attr("aria-checked", false);
            } else {
                $('.x101 .checkbox-custom').addClass('checked').attr("aria-checked", true);
            }
            try {
                groupCheckbox($(this).closest(".dl-row"));
                allCheckbox($(this).closest(".downloads-view"));
                totalFileSize();
            } catch (err) {
                console.log(err);
            }
        });
    });
})(window, document, jQuery);;
(function (w, $) {
    function modalTemplate(videoModal) {
        if (videoModal) {
            return '<div class="modal-container video-modal">' +
                '  <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">' +
                '      <div class="modal-dialog">' +
                '          <div>' +
                '              <div class="modal-header">' +
                '                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span><span class="visually-hidden">close</span></button>' +
                '               </div>' +
                '          <div class="modal-body">' +
                '       </div></div></div></div></div>';
        } else {
            return '<div class="modal-container">' +
                '  <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">' +
                '      <div class="modal-dialog">' +
                '          <div class="modal-content">' +
                '              <div class="modal-header">' +
                '                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                '               </div>' +
                '          <div class="modal-body">' +
                '       </div></div></div></div></div>';
        }
    }
    const previewMode = window.location.search.indexOf("sc_mode=preview");
  $(".modal-body-content").each(function () {
        const searchParams = new URLSearchParams(window.location.search);
        const itemId = searchParams.get("sc_itemid");
        const id = $(this).prop('id');
        let videoModal = $(this).hasClass('video-modal-style');
        let isNotParentPreview;
        if (itemId && itemId !== null){
            isNotParentPreview = itemId.indexOf(id.split('_')[1].toUpperCase());
        }
        const cleanedId="'"+id+"'"
        if (previewMode > -1 && isNotParentPreview > -1) {
            let previewAnchor = '<p>Copy the text below and paste into JavaScript link field <p>';
            previewAnchor+='<p>javascript:OpenModal(' + cleanedId + ')</p><a data-bs-toggle="modal" href="#' + id + '-modal">Click here to preview the Modal display</a>';
            $(this).after(previewAnchor);
        }

        const $modalString = $($.parseHTML(modalTemplate(videoModal)));
        $modalString.find('.modal').attr('id', id + '-modal').find('.modal-body').append($(this));
        $("body").append($modalString);
    })
    w.OpenModal = function(modId) {
        $('#' + modId + "-modal").modal('show');
    }
  
})(window, jQuery);

;
(function (d) {
    d.addEventListener("DOMContentLoaded", function () {
        const checkElementIsInView = (elem) => {
            const observer = new IntersectionObserver(function (entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        elem.classList.add("show");
                    }
                });
            }, { threshold: [.5] });
            observer.observe(elem);
        };
        d.querySelectorAll(".body-newsroom .newsroom-image-fade").forEach(newsroomImageFadeElem => {
            checkElementIsInView(newsroomImageFadeElem);
        });
    });
})(document);;
(function (d) {
    function getStringWithMostChars(arr) {
        return arr.reduce((longest, str) =>
            str.length > longest.length ? str : longest,
        );
    }
    function createDigits(element, dataPoint, digitContainer) {
        const template = element.querySelector(".digit-template").content.firstElementChild.cloneNode(true);
        digitContainer.innerHTML = "";
        const formatString = dataPoint.dataset.cvxFormatString.trim().split("{#}");
        const sequenceArray = dataPoint.dataset.cvxSequence.split("|");
        if (!formatString || !sequenceArray) return;
        const prefix = formatString[0];
        const suffix = formatString[1];
        if (prefix) {
            const span = d.createElement("span");
            span.classList.add("prefix", "inline-item");
            span.innerHTML = prefix;
            dataPoint.prepend(span)
        }
        if (suffix) {
            const span = d.createElement("span");
            span.classList.add("suffix", "inline-item");
            span.innerHTML = suffix;
            dataPoint.append(span);
        }
        const iterator = sequenceArray.length;
        const longestString = getStringWithMostChars(sequenceArray);
        template.querySelector(".value").innerHTML = longestString;
        sequenceArray.forEach(elem => {
            const span = d.createElement("span");
            span.innerHTML = elem;
            template.querySelector(".slide").append(span);
        });
        const rollDistance = parseFloat((100 - (100 / iterator)).toFixed(2));
        digitContainer.style.setProperty('--roll-distance', `-${rollDistance}%`);
        digitContainer.appendChild(template);
        digitContainer.classList.add("show");
    }
    function createAnimation(element) {
        const dataPoint = element.querySelector(".data-point");
        const digitContainer = element.querySelector(".digit-container");
        if (!dataPoint || !digitContainer) return;
        createDigits(element, dataPoint, digitContainer);
        let observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting === true) {
                        digitContainer.classList.add("animate");
                    }
                });
            }, { rootMargin: "15% 0px -15% 0px" }
        );
        observer.observe(dataPoint);
    }
    d.addEventListener("DOMContentLoaded", function (_event) {
        d.querySelectorAll(".c11b-5").forEach((element) => {
            createAnimation(element);
        });
    });
})(document);
;
(function (d) {
    d.addEventListener("DOMContentLoaded", () => {
        let accordions = d.querySelectorAll('.c53 .accordion');

        function setAnimation(elm) {
            elm.classList.add("fade-in");
        }

        function hideAllImages(elms) {
            elms.forEach((elm) => {
                elm.style.display = 'none';
                elm.classList.remove("fade-in");
            });
        }

        function showSelectedImage(elm) {
            elm.style.display = 'initial';
        }

        accordions.forEach((accordion, index) => {
            accordion.addEventListener('show.bs.collapse', function (event) {
                const itemClickedIndex = event.target.dataset.itemIndex;
                const accordionItem = event.target.parentNode;

                //reset
                accordion.querySelectorAll("button.accordion-button").forEach((button) => {
                    button.disabled = false;
                });

                //disable current item
                accordionItem.querySelector("button.accordion-button").disabled = true;

                if (!accordion.parentNode.classList.contains("standalone")) {
                    let containers = accordion.parentNode.querySelectorAll(".accordion-img");
                    let imgContainer = containers[itemClickedIndex];

                    hideAllImages(containers);
                    showSelectedImage(imgContainer);
                    setAnimation(imgContainer);
                }
            });

            accordion.addEventListener('hide.bs.collapse', function (event) {
                const accordionItem = event.target.parentNode;

                //leave last item open
                if (accordionItem.querySelector("button.accordion-button").disabled) {
                    event.preventDefault();
                }   
            });
        })
    });
})(document);;
(function (w, d) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

    function initiateGSAP(elem, animationType) {
        const mm = gsap.matchMedia();
        mm.add({
            isDesktop: "(min-width: 768px)",
            isTabletOrMobile: "(max-width: 767.99px)"
        }, (_context) => {
            const openingTl = gsap.timeline();
            openingTl.fromTo(elem.querySelector(".background"),
                { scale: (animationType === "zoom-in" ? 1 : 1.1) },
                { scale: (animationType === "zoom-in" ? 1.1 : 1), duration: 1, }, "openingImage"
            );
            ScrollTrigger.create({
                trigger: elem,
                start: "top 120px",
                end: "100%",
                scrub: 1,
                animation: openingTl,
                invalidateOnRefresh: true,
                //markers: true
            });
        });

    }

    const splitTextObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    splitText(target);
                    //only trigger once
                    splitTextObserver.unobserve(target);
                }
            });
        },
        { rootMargin: "-50% 0% -50% 0%", threshold: [0.0] }
    );

    function setObserve(c54) {
        const hasImage = c54.classList.contains("has-image");

        const splitText = function () {
            if (!hasImage) {
                const header = c54.querySelector(".type-header");
                let splitTextLines = new SplitText(header, { type: "lines" });

                gsap.timeline()
                    .to(header, { opacity: 1 }, "fade")
                    .fromTo(splitTextLines.lines, { opacity: 0, y: 50 }, {
                        opacity: 1,
                        y: 0,
                        ease: "in",
                        stagger: 0.3,
                    }, "fade");
            }
        }

        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        if (target.classList.contains("has-image")) {
                            target.classList.add("in");
                        }
                        splitText();
                        //only trigger once
                        observer.unobserve(target);
                    }
                });
            },
            { rootMargin: hasImage ? "0% 0px 0% 0px" : "-50% 0% -50% 0%", threshold: [0.0] }
        );

        observer.observe(c54);
    }
    function setVideos(video) {
        mediaCommonNamespace.setMedia(video);
        mediaCommonNamespace.setMediaEventListenters(video);
        const videoObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        target.play();
                        //only trigger once
                        videoObserver.unobserve(target);
                    }
                });
            },
            { rootMargin: "0% 0px 0% 0px", threshold: [0.1] }
        );

        videoObserver.observe(video);
    }

    d.addEventListener("DOMContentLoaded", function (_event) {
        d.querySelectorAll(".c54").forEach((c54) => {
            //trigger initial animation when in view
            setObserve(c54);
            w.requestAnimationFrame(function () {
                const animationType = c54.dataset.chevAnimation;
                if (animationType !== "") {
                    initiateGSAP(c54, animationType);
                }
            });
            const video = c54.querySelector(".video");
            if (video != null) {
                setVideos(video);
            }
            function debounce(func, timeout = 300) {
                let timer;
                return (...args) => {
                    clearTimeout(timer);
                    timer = setTimeout(() => {
                        func.apply(this, args);
                    }, timeout);
                };
            }
            let windowWidth = w.innerWidth;
            w.addEventListener("resize",
                debounce(() => {
                    const newWidth = w.innerWidth;
                    //prevent mobile browsers from triggering due to browser height change on scroll
                    if (newWidth !== windowWidth) {
                        if (video != null) {
                            mediaCommonNamespace.setMedia(video);
                        }
                        windowWidth = newWidth;
                    }
                })
            );
        });

    });
})(window, document);
;
(function (d) {
    function updateBackgroundColor(activeSlide, carouselParent) {
        let newBackgroundColor = carouselParent.dataset.backgroundColor;
        if (activeSlide && activeSlide.slide.dataset.backgroundColor) {
            newBackgroundColor = activeSlide.slide.dataset.backgroundColor;
        }
        const currentColor = Array.from(carouselParent.classList).find(match => match.startsWith("background-color-"));
        if (`background-color-${newBackgroundColor}` !== currentColor) {
            carouselParent.classList.remove(currentColor);
            carouselParent.classList.add(`background-color-${newBackgroundColor}`);
        }
    }
    d.addEventListener("DOMContentLoaded", function () {
        d.querySelectorAll(".c56").forEach(carouselParent => {
            const splideItem = carouselParent.querySelector(".splide");
            const splideSlides = splideItem.querySelectorAll(".splide__slide");
            if (splideSlides.length > 1) splideItem.querySelector(".control").classList.add("show");
            const splide = new Splide(splideItem, {
                start: 0,
                perPage: 1,
                perMove: 1,
                autoWidth: false,
                focus: 'center',
                padding: "6%",
                trimSpace: false,
                mediaQuery: 'min',
                updateOnMove: true,
                breakpoints: {
                    768: {
                        padding: "16%",
                    },
                    992: {
                        perPage: 3,
                        padding: "12%",
                    },
                    1200: {
                        padding: "16%",
                    },
                    1400: {
                        padding: "20%",
                    },
                    1600: {
                        padding: "24%",
                    }
                }
            });
            splide.on('ready', () => {
                //refresh to remove left arrow on load
                updateBackgroundColor(splide.Components.Slides.getAt(0), carouselParent);
                splide.refresh();
            });
            splide.mount();
            splide.on("active", (activeSlide) => {
                updateBackgroundColor(activeSlide, carouselParent);
            });
            splideSlides.forEach((slide, index) => {
                slide.addEventListener("focus", () => {
                    !slide.classList.contains("is-active") && splide.go(index);
                })

            });
            d.onkeydown = checkKey;
            function checkKey(e) {
                e = e || window.event;
                if (e.keyCode == '37') {
                    // left arrow
                    splide.go(splide.Components.Controller.getPrev());
                }
                else if (e.keyCode == '39') {
                    // right arrow
                    const nextSlide = splide.Components.Controller.getNext();
                    nextSlide != -1 && splide.go(nextSlide);
                }
            }
        });
    });
})(document);;
(function (d, w) {
    const audioWaveContoller = function (bars) {
        // Function to generate a random number within a specified range
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // Function to select a random subset of elements
        function getRandomSubset(items, percentage) {
            const numToChange = Math.round(items.length * percentage);
            const selectedIndices = [];
            while (selectedIndices.length < numToChange) {
                const randomIndex = getRandomInt(0, items.length - 1);
                if (!selectedIndices.includes(randomIndex)) {
                    selectedIndices.push(randomIndex);
                }
            }
            return selectedIndices.map(index => items[index]);
        }
        // Function to set random heights for a subset of items
        function setRandomHeights(items, percentage) {
            const minHeight = 3; // pixels
            const maxHeight = 20; // pixels
            const selectedItems = getRandomSubset(items, percentage);
            selectedItems.forEach(item => {
                const randomHeight = getRandomInt(minHeight, maxHeight);
                item.style.height = `${randomHeight}px`;
            });
        }
        // Variable to store the interval ID
        let intervalId = null;

        // Function to start the random height changes
        function start() {
            if (!intervalId) {
                const changePercentage = 0.6; // Change 50% of elements
                intervalId = setInterval(() => setRandomHeights(bars, changePercentage), 100); // 100 milliseconds is 1 second
            }
        }

        // Function to stop the random height changes
        function stop() {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        }
        return {
            start: start,
            stop: stop
        }
    }
    function mediaStartListener(elem) {
        w.addEventListener("media-start", function mediaStartListener(e) {
            if (elem !== e.target) {
                elem.pause();
            }
        });

    }
    function setAudioCards(audioCards, splide) {
        if (audioCards.length) {
            audioCards.forEach(audioCard => {
                const audio = audioCard.querySelector(".audio");
                audioCard.addEventListener("click", function (e) {
                    e.preventDefault();
                });
                if (audio) {
                    //pause audio when slide becomes inactive
                    splide.on('move', () => {
                        audio.pause();
                    });
                    mediaCommonNamespace.setMediaEventListenters(audio, audioCard);
                    const audioWaveController = audioWaveContoller(audioCard.querySelectorAll('.button-progress-bar'));
                    ["play", "pause", "ended"].forEach(function (event) {
                        audio.addEventListener(event, () => {
                            if (event === "play") {
                                mediaCommonNamespace.dispatchMediaStartEvent(audio);
                                audioWaveController.start();
                            } else {
                                audioWaveController.stop();
                            }
                        });
                    });
                    mediaStartListener(audio);
                }
            });
        };
    }
    d.addEventListener("DOMContentLoaded", function () {
        d.querySelectorAll(".c57").forEach(carouselParent => {

            //check for audio-cards and set audio event Listeners
            const splideItem = carouselParent.querySelector(".splide");
            const eventSlide = carouselParent.querySelector(".events");
            const splideSlides = splideItem.querySelectorAll(".splide__slide");
            const audioCards = carouselParent.querySelectorAll(".audio-card");
            if (splideSlides.length > 1) splideItem.querySelector(".control").classList.add("show");
            let splideFocus = 'center';
            let splideTrimSpace = false;
            let splideBreakpoints = {
                768: {
                    padding: "16%",
                },
                992: {
                    perPage: 3,
                    padding: "12%",
                },
                1200: {
                    padding: "16%",
                },
                1400: {
                    padding: "20%",
                },
                1600: {
                    padding: "24%",
                }
            };
            if (eventSlide) {
                splideFocus = 'left';
                splideTrimSpace = true;
                splideBreakpoints = {
                    375: {
                        padding: "3.73%",
                    },
                    768: {
                        padding: "11.75%",
                    }
                };
            }
            const splide = new Splide(splideItem, {
                start: 0,
                perPage: 1,
                perMove: 1,
                autoWidth: false,
                slideFocus: true,
                keyboard: true,
                focus: splideFocus,
                padding: "6%",
                trimSpace: splideTrimSpace,
                mediaQuery: 'min',
                updateOnMove: true,
                flickPower: 300,
                dragMinThreshold: {
                    mouse: 0,
                    touch: 10,
                },
                breakpoints: splideBreakpoints
            });
            splide.on('ready', () => {
                //refresh to remove left arrow on load
                splide.refresh();
            });
            splide.mount();
            DialogNamespace.refreshSplideOnDialogShown(splideItem, splide);
            splide.on('move', () => {
                //hide and show opening content
                if (splide.index >= 1 && !eventSlide) {
                    carouselParent.querySelector(".opening-content").classList.add("hide");
                    return;
                }
                if (!eventSlide) carouselParent.querySelector(".opening-content").classList.remove("hide");
            });
            splideSlides.forEach((slide, index) => {
                slide.addEventListener("focus", () => {
                    if (!slide.classList.contains("is-active")) {
                        splide.go(index);
                    }
                });
            });
            //Set audio cards
            setAudioCards(audioCards, splide);
        });
    });
})(document, window);;
(function (d) {
    d.addEventListener("DOMContentLoaded", function () {
        d.querySelectorAll(".c58").forEach(carouselParent => {
            const splideItem = carouselParent.querySelector(".splide");
            const splideSlides = splideItem.querySelectorAll(".splide__slide");
            if (splideSlides.length > 1) splideItem.querySelector(".control").classList.add("show");
            const hasTimelineSlide = [...splideSlides].some(slide => slide.classList.contains("timeline-slide"));
            const splide = new Splide(splideItem, {
                perPage: 1,
                gap: 16,
                perMove: 1,
                focus: 'center',
                padding: hasTimelineSlide ? 0 : "6%",
                trimSpace: false,
                start: 0,
                mediaQuery: 'min',
                breakpoints: {
                    768: {
                        gap: 24,
                        padding: hasTimelineSlide ? "11%" : "16%",
                    },
                    992: {
                        padding: hasTimelineSlide ? "16%" : "12%",
                    },
                    1200: {
                        padding: hasTimelineSlide ? "20%" : "16%",
                    },
                    1400: {
                        padding: hasTimelineSlide ? "22%" : "20%",
                    },
                    1600: {
                        padding: hasTimelineSlide ? "25%" : "24%",
                    }
                }

            });
            splide.mount();
            DialogNamespace.refreshSplideOnDialogShown(splideItem, splide);
        });
    });
})(document);;
(function (d) {
    d.addEventListener("DOMContentLoaded", function () {
        d.querySelectorAll(".c61").forEach(videoParent => {
            const videoElem = videoParent.querySelector("[data-toggle='youtube']");
                videoParent.querySelector(".video-link").addEventListener("click", (e) => {
                    if (window.innerWidth >= 768) {
                        e.preventDefault();
                        const vid = videoElem.id;
                        const player = YT_findById(vid);
                        videoParent.classList.add("show");
                        videoParent.querySelector(".video-link").classList.add("fade-out");
                        player.playVideo();
                    }
                });
        });
    });
})(document);;
(function (d, w) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

    function init(c62, firstC62) {
        const mm = gsap.matchMedia();

        mm.add(
            {
                isDesktop: `(min-width: 992px)`,
                isMobile: `(max-width: 767.99px)`,
                isTablet: `(min-width:768px) and (max-width: 991.99px)`,
                reduceMotion: "(prefers-reduced-motion: reduce)",
            },
            (context) => {
                let { isMobile, reduceMotion } = context.conditions;
                let scale = isMobile ? 0.5 : .18;
                let borderRadius = isMobile ? "16px" : "44.5px";

                if (!reduceMotion) {
                    //check and revert any existing timelines.
                    if (c62.quoteAnimationTl && c62.quoteAnimationTl.scrollTrigger) {
                        c62.quoteAnimationTl.scrollTrigger.kill();
                        c62.quoteSplit.revert();
                    }

                    c62.quoteSplit = new SplitText(c62.querySelector(".quote p"), {
                        type: "lines",
                    });   

                    c62.quoteAnimationTl = gsap.timeline({
                        scrollTrigger: {
                            trigger: c62,
                            start: "top center",
                            end: "90% center",
                            scrub: 1,
                            invalidateOnRefresh: true,
                        },
                    });

                    c62.quoteAnimationTl
                        .set(c62.querySelector(".quote"), {
                            opacity: 1,
                        })
                        .set(c62.quoteSplit.lines, {
                            opacity: 0,
                        })
                        .to(c62.querySelector("img"),
                            {
                                scale: scale,
                                borderRadius: borderRadius,
                            }, "start"
                        )
                        .fromTo(c62.quoteSplit.lines,
                            {
                                y: 50,
                                opacity: 0
                            },
                            {
                                opacity: 1,
                                y: 0,
                                stagger: 0.3,
                            }, "start+=0.2"
                        )
                        .fromTo(c62.querySelector(".name-position p"),
                            {
                                y: 50,
                                opacity: 0
                            },
                            {
                                opacity: 1,
                                y: 0,
                                stagger: 0.3,
                            },"-=0.2");
                }

                return () => { };
            }
        );
    }

    function debounce(func, timeout = 300) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    }

    function initAllC62() {
        w.requestAnimationFrame(function () {
            let isFirstC62OnTop;
            d.querySelectorAll(".c62").forEach((c62, index) => {
                if (c62.querySelector(".animated")) init(c62, isFirstC62OnTop);
            });
        });
    }

    w.addEventListener("resize",
        debounce(() => {
            initAllC62();
        })
    );

    d.addEventListener("DOMContentLoaded", function () {
        initAllC62();
    });
})(document, window);
;
(function (d) {
    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    target.classList.add("in");
                    setTimeout(() => {
                        //removing class prevents transitions from repeating on resize
                        target.classList.remove("opening-animation");
                    }, 4000);
                    //only trigger once
                    observer.unobserve(target);
                }
            });
        },        
        { rootMargin: "0% 0px -70% 0px", threshold: [0] }
    );
    d.addEventListener("DOMContentLoaded", function (_event) {
        d.querySelectorAll(".c64").forEach((c64) => {                                
            //trigger initial animation when in view
            observer.observe(c64);
        });

    });
})(document);
;
(function (d) {
    function update(elem) {
        return fetch("/api/sitecore/StockQuote/GetStockQuoteData", {
            method: 'GET'
        }).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    if (!data.Error) {
                        const price = parseFloat(data.Response["Global Quote"]["05. price"]).toFixed(2);
                        const change = parseFloat(data.Response["Global Quote"]["09. change"]).toFixed(2);
                        const sign = (change > 0) ? "+" : "";
                        const changePercent = parseFloat(data.Response["Global Quote"]["10. change percent"]).toFixed(2);
                        const symbol = data.Response["Global Quote"]["01. symbol"];
                        elem.querySelector(".stock").innerHTML = "$" + price;
                        elem.querySelector(".change").innerHTML = `${sign}${change} (${sign}${changePercent}%)`;
                        elem.querySelector(".timestamp").innerHTML = `${symbol} as of ${data.TimeStamp}`;
                        return;
                    }
                    elem.querySelector(".timestamp").innerHTML = data.Error;
                });
            }
        });
    }

    d.addEventListener("DOMContentLoaded", function (_event) {
        d.querySelectorAll(".c67").forEach((c67) => {
            //trigger initial animation when in view
            
            const startInterval = () => {
                setInterval(function () {
                    update(c67);
                }, 60 * 5 * 1000);
            }
            update(c67);
            startInterval();
        });

    });
})(document);
;
(function (d) {
    function generateElement([left, right]) {
        const p = d.createElement("p");
        p.classList.add("stock-info");
        p.innerHTML = `<span class="left">${left}</span>
                        <span class="right">${right}</span>`
        return p;
    }
    function update(elem) {
        return fetch("/api/sitecore/StockQuote/GetStockQuoteInfo", {
            method: 'GET'
        }).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    if (!data.Error) {
                        const price = parseFloat(data.Response["lastTrade"]).toFixed(2);
                        const change = parseFloat(data.Response["changeNumber"]).toFixed(2);
                        const sign = (change > 0) ? "+" : "";
                        const changePercent = parseFloat(data.Response["changePercent"]).toFixed(2);
                        const symbol = data.Response["symbol"];
                        const container = elem.querySelector(".stock-info-container");
                        const stockItems = [];
                        stockItems.push(["NYSE", symbol]);
                        stockItems.push(["Current", `$${price}`]);
                        stockItems.push(["Change", `${sign}${change} (${sign}${changePercent}%)`]);
                        const fragment = d.createDocumentFragment();
                        stockItems.forEach(stockItem => {
                            fragment.appendChild(generateElement(stockItem));
                        })
                        container.replaceChildren(fragment);
                        elem.querySelector(".timestamp").innerHTML = `${symbol} as of ${data.Response["timeStamp"]}`;
                        return;
                    }
                    elem.querySelector(".timestamp").innerHTML = data.Error;
                });
            }
        });
    }
    d.addEventListener("DOMContentLoaded", function (_event) {
        d.querySelectorAll(".c67a").forEach((c67a) => {
            //trigger initial animation when in view

            const startInterval = () => {
                setInterval(function () {
                    update(c67a);
                }, 60 * 5 * 1000);
            }
            update(c67a);
            startInterval();
        });

    });
})(document);
;
(function (w, d) {
    function setTextItemClasses(index, textItems, forward) {
        if (forward) {
            textItems.forEach((textItem, i) => {
                if (i < index) {
                    textItem.classList.add("prev");
                    return;
                }
                textItem.classList.remove("prev");
            });
            return;
        } 
        textItems.forEach((textItem, i) => {
            if (i >= index) {
                w.setTimeout(() => {
                    textItem.classList.remove("prev");
                }, "750");
            }
        });
    }
    function setVideos(videos) {
        videos.forEach(video => {
            const button = video.closest(".c70").querySelector(`.play-pause-button`);
            mediaCommonNamespace.setMedia(video);
            mediaCommonNamespace.setMediaEventListenters(video, button);
        });
    }
    function handleTextSlides(splide, index) {
        const textItems = splide.root.querySelectorAll(".content-container .list-item");
        const prevIndex = splide.Components.Controller.getIndex(true);
        //set or remove previous class on text items
        if (index > prevIndex) {
            //carousel fwd
            setTextItemClasses(index, textItems, true);
        } else {
            //carousel rev
            setTextItemClasses(index, textItems, false);
        }
        //remove and set active class
        textItems.forEach(textItem => textItem.classList.remove("active"));
        textItems[index].classList.add("active");
    }
    function handleVideo(slideItem, play = true) {
        if (slideItem !== null) {
            const video = slideItem.querySelector(".video");
            if (video && play) {
                video.play();
            } else if (video) {
                video.pause();
                video.currentTime = 0;
            }
        }
    }
    function handlePaginationAutoPlay(splide, rate = 0) {
        if (splide !== null) {
            const { Controller } = splide.Components;
            const { Autoplay } = splide.Components;
            const { Pagination } = splide.Components;
            const animateClass = "animate-progress";
            if (Autoplay.isPaused()) {
                splide.root.classList.remove(animateClass);
                return;
            }
            splide.root.classList.add(animateClass);
            const currentIndex = Controller.getIndex(); 
            const ratePercent = rate * 100;
            Pagination.getAt(currentIndex).button.querySelector(".button-progress-bar").style.backgroundSize = `${ratePercent}% 100%`;
        }
    }
    function setControlColorTheme(carouselParent, classList) {
        const controlElement = carouselParent.querySelector(".control");
        let color = Array.from(classList).find(match => match.startsWith("background-color-dark-"));
        if (color) {
            color = color.split("background-color-dark-")[1];
            const currentControlColor = Array.from(controlElement.classList).find(match => match.startsWith("control-color-"));
            controlElement.classList.remove(currentControlColor);
            controlElement.classList.add(`control-color-${color}`);
        }
    }
    function setBodyColorTheme(carouselParent, classList) {
        //check if first module using navigation.js added class
        if (carouselParent.classList.contains("nav-first-module-no-adjustment") || carouselParent.classList.contains("nav-first-module-adjustment")) {
            globalNamespace.setBodyColorTheme(classList);
        }
    }
    d.addEventListener("DOMContentLoaded", function () {
        d.querySelectorAll(".c70").forEach(carouselParent => {
            const videos = carouselParent.querySelectorAll(".video");
            setVideos(videos);
            const splideItem = carouselParent.querySelector(".splide");
            const splideSlides = splideItem.querySelectorAll(".splide__slide");
            if (splideSlides.length > 1) {
                splideItem.querySelector(".control").classList.add("show");
            } else if (splideSlides.length === 1 && splideSlides[0].firstElementChild.classList.contains("video-container")) {
                splideItem.querySelector(".control").classList.add("show-play-pause-button-only");
            }
            const splide = new Splide(splideItem, {
                type: 'loop',
                arrows: false,
                focus: 'center',
                trimSpace: false,
                start: 0,
                autoplay: true,
                pauseOnHover: false,
                resetProgress: false,
                interval: 6000,
                intersection: {
                    inView: {
                        autoplay: true,
                    },
                    outView: {
                        autoplay: false,
                    },
                }
            });
            splide.on("ready", function () {
                const { Controller } = splide.Components;
                const { Elements } = splide.Components;
                const currentIndex = Controller.getIndex();
                setControlColorTheme(carouselParent, Elements.slides[currentIndex].classList);
                setBodyColorTheme(carouselParent, Elements.slides[currentIndex].classList);
                handleVideo(Elements.slides[currentIndex], true);
            });
            splide.on('intersection:in', function (_entry) {
                setTimeout(() => {
                    carouselParent.classList.add("intersected");
                }, 1000);
                
            });
            splide.on('pagination:mounted', function (data) {
                data.items.forEach(function (item) {
                    item.button.innerHTML = `<span class="button-progress-bar"></span>`;
                });
            });
            splide.on('autoplay:playing', function (rate) {
                handlePaginationAutoPlay(splide, rate);
            });
            splide.mount(window.splide.Extensions);
            DialogNamespace.refreshSplideOnDialogShown(splideItem, splide);
            const { Controller } = splide.Components;
            const { Elements } = splide.Components;
            const { Autoplay } = splide.Components;
            splide.on('autoplay:pause', function () {
                const currentIndex = Controller.getIndex();
                handleVideo(Elements.slides[currentIndex], false);
            });
            splide.on("visible", function (slideItem) {
                handleVideo(slideItem.slide, true);
                setBodyColorTheme(carouselParent, slideItem.slide.classList);
            });
            splide.on("move", function (newIndex) {
                handleTextSlides(splide, newIndex);
                setControlColorTheme(carouselParent, Elements.slides[newIndex].classList);
                handlePaginationAutoPlay(splide);
            });
            splide.on("hidden", function (slideItem) {
                handleVideo(slideItem.slide, false);
            });
            carouselParent.querySelectorAll(".splide__pagination__page").forEach(paginationButton => {
                //pause autoplay on pagination click
                paginationButton.addEventListener("click", () => {
                    Autoplay.pause();
                });
            });
            carouselParent.querySelector(".splide__toggle").addEventListener("click", () => {
                //restart carousel if button clicked and slide is on last slide
                if (!Autoplay.isPaused() && Controller.getIndex() === Controller.getEnd()) {
                    Controller.go(0);
                    Autoplay.play();
                }

            });
            function debounce(func, timeout = 300) {
                let timer;
                return (...args) => {
                    clearTimeout(timer);
                    timer = setTimeout(() => {
                        func.apply(this, args);
                    }, timeout);
                };
            }

            let windowWidth = w.innerWidth;
            w.addEventListener("resize",
                debounce(() => {
                    const newWidth = w.innerWidth;
                    //prevent mobile browsers from triggering due to browser height change on scroll
                    if (newWidth !== windowWidth) {
                        if (videos != null) {
                            videos.forEach(video => {
                                mediaCommonNamespace.setMedia(video);
                            });
                        }
                        windowWidth = newWidth;
                    }
                })
            );
        });
    });
})(window, document);;
(function (d) {
    function init(c71) {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        const mm = gsap.matchMedia();
        mm.add(
            {
                isDesktop: "(min-width: 768px)",
                isTabletOrMobile: "(max-width: 767.99px)",
            },
            (context) => {
                const { isDesktop } = context.conditions;

                const header = c71.querySelector(".header");
                if (header) {
                    const splitTextLines = new SplitText(
                        c71.querySelector(".header .type-display"),
                        { type: "lines", linesClass: "lines" }
                    );

                    const animateLines = gsap.timeline().fromTo(
                        splitTextLines.lines,
                        { opacity: 0, y: 50 },
                        {
                            opacity: 1,
                            y: 0,
                            stagger: 0.1,
                        }
                    );

                    gsap.set(c71.querySelector(".header"), { zIndex: -2 });

                    //header stays at the top
                    ScrollTrigger.create({
                        trigger: c71.querySelector(".header"),
                        start: "top top",
                        scrub: true,
                        pin: true,
                        pinSpacing: false,
                        invalidateOnRefresh: true,
                    });
    
                    ScrollTrigger.create({
                        trigger: c71.querySelector(".header .header-text"),
                        start: "top 70%",
                        end: "top 20%",
                        animation: animateLines,
                        scrub: true,
                        invalidateOnRefresh: true,
                    });
                }

                setDialogContentHeight(c71);

                const sections = c71.querySelectorAll(".panels section");
                const dialogText = c71.querySelectorAll(".dialog-text .dialog-item");

                const bottomOffset = isDesktop ? 64 : 0;
                ScrollTrigger.create({
                    trigger: c71.querySelector(".dialog"),
                    start: () => `bottom ${sections[0].offsetHeight - bottomOffset}`,
                    endTrigger: sections[sections.length - 1],
                    end: "top top",
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                    invalidateOnRefresh: true,
                });

                sections.forEach((section, i) => {
                    section.bg = section.querySelector(".bg");

                    if (i !== sections.length - 1) {
                        if (i == 0 && !header) {
                            ScrollTrigger.create({
                                trigger: section.bg,
                                start: "top top",
                                end: () => `${(sections.length - 1) * 100}%`,
                                scrub: true,
                                pin: true,
                                pinSpacing: false,
                                invalidateOnRefresh: true,
                            });
                        } else {
                            gsap.fromTo(
                                section.bg,
                                {
                                    y: 0,
                                },
                                {
                                    y: () => window.innerHeight * 0.5,
                                    ease: "none",
                                    scrollTrigger: {
                                        trigger: section,
                                        start: "top top",
                                        end: "bottom top",
                                        scrub: true,
                                        invalidateOnRefresh: true,
                                    },
                                }
                            );
                        }
                    }

                    function updateDialog() {
                        const ctaLinkParent = c71.querySelector(".dialog .cta-link-parent");
                        section.bg.dataset.linkUrl == "" ? (ctaLinkParent.removeAttribute("href"), ctaLinkParent.removeAttribute("target")) :
                            (ctaLinkParent.href = section.bg.dataset.linkUrl, ctaLinkParent.target = section.bg.dataset.linkTarget);
                        const backgroundColorElement = c71.querySelector(".dialog .background").classList;
                        backgroundColorElement.forEach((classes) => {
                            if (classes.includes("background-color-")) {
                                backgroundColorElement.replace(classes, section.bg.dataset.backgroundColor)
                            }
                        });
                    }
                    
                    ScrollTrigger.create({
                        trigger: section,
                        start: "top center",
                        onEnter: updateDialog,
                        invalidateOnRefresh: true,
                    });

                    ScrollTrigger.create({
                        trigger: section,
                        start: "bottom bottom",
                        onLeaveBack: updateDialog,
                        invalidateOnRefresh: true,
                    });

                    //don't animate the first slide text
                    if (i >= 1) {
                        const panelTextAnimation = gsap.timeline({
                            //for the overlay text transition between slides
                            scrollTrigger: {
                                trigger: section,
                                start: () => "top bottom",
                                end: "top top",
                                scrub: true,
                            },
                        });

                        panelTextAnimation
                            .to(
                                c71.querySelector(".dialog .dialog-text"),
                                {
                                    y: () => i * -dialogText[0].offsetHeight,
                                    duration: 0.5,
                                },
                                "fade"
                            )
                            .to(
                                dialogText[i - 1],
                                {
                                    opacity: 0,
                                    duration: 0.5,
                                },
                                "fade"
                            )
                            .to(
                                dialogText[i],
                                {
                                    opacity: 1,
                                    duration: 0.5,
                                },
                                "fade"
                            );
                    }
                });
            }
        );

        const videos = c71.querySelectorAll(".video");
        setVideos(videos);
    }

    function calculateDialogContentHeight(dialogContent, newContainerHeight, dialogItemArrows, arrowHeight) {
        let dialogContentPadding = window.getComputedStyle(dialogContent).paddingBlock.split(' ');
        let padding = (+dialogContentPadding[0].split('px')[0]) + (+dialogContentPadding[1].split('px')[0]);
        dialogContent.style.height = newContainerHeight + padding + "px";
        let arrowMargin = window.innerWidth >= 768 ? (newContainerHeight - arrowHeight) / 2 : "0";
        dialogItemArrows.forEach((item) => {
            item.style.margin = arrowMargin + "px 0px";
        });
    }

    function setDialogContentHeight(c71) {
        const dialogContent = c71.querySelector(".dialog-content");
        const textContainers = c71.querySelectorAll(".dialog-text .text-container");
        const dialogItemArrows = c71.querySelectorAll(".dialog-content .arrow");
        let largestTextContainer = null;
        let containerHeight = null;
        textContainers.forEach((textContainer) => {
            containerHeight = Math.max(containerHeight, textContainer.offsetHeight);
            if (textContainer.offsetHeight == containerHeight) {
                largestTextContainer = textContainer;
            }
        });
        const arrowHeight = dialogItemArrows[0] ? dialogItemArrows[0].offsetHeight : "32";
        calculateDialogContentHeight(dialogContent, containerHeight, dialogItemArrows, arrowHeight);

        const ro = new ResizeObserver(entries => {
            entries.forEach(entry => {
                const newContainerHeight = largestTextContainer.offsetHeight;
                if (newContainerHeight !== containerHeight) {
                    calculateDialogContentHeight(dialogContent, newContainerHeight, dialogItemArrows, arrowHeight);
                    containerHeight = newContainerHeight;
                }
            });
        });
        ro.observe(largestTextContainer);
    }

    function setVideos(videos) {
        videos.forEach(video => {
            const button = video.closest(".c71").querySelector(`.play-pause-button`);
            mediaCommonNamespace.setMedia(video);
            mediaCommonNamespace.setMediaEventListenters(video, button);
        });
    }

    d.addEventListener("DOMContentLoaded", function (_event) {
        d.querySelectorAll(".c71").forEach((c71) => {
            setTimeout(() => init(c71), 1);
        });
    });
})(document);
;
(function (w, d) {
    function setVideos(videos) {
        videos.forEach(video => {
            const button = video.closest(".video-container").querySelector(`.play-pause-button`);
            mediaCommonNamespace.setMedia(video);
            mediaCommonNamespace.setMediaEventListenters(video, button);
        });
    }
    function handleVideos(module, play) {
        const videos = module.querySelectorAll(".video");
        if (videos && play) {
            videos.forEach(video => {
                video.play();
            });
        } else if (videos && !play) {
            videos.forEach(video => {
                video.pause();
            });
        }
    }
    let observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting === true) {
                    handleVideos(entry.target, true);
                } else {
                    handleVideos(entry.target, false);
                }
            });
        })
    d.addEventListener("DOMContentLoaded", function () {
        d.querySelectorAll(".c72").forEach(module => {
            const videos = module.querySelectorAll(".video");
            if (videos != null) {
                setVideos(videos);
            }
            observer.observe(module);
        });
    });
})(window, document);;
(function (d) {
    function init(c73) {
        gsap.registerPlugin(ScrollTrigger);
        const headingContainer = c73.querySelector(".heading-container");
        if (headingContainer) {
            //header stays at the top
            ScrollTrigger.create({
                trigger: headingContainer,
                start: "top",
                end: "100%",
                scrub: true,
                pin: true,
                pinSpacing: false,
                invalidateOnRefresh: true,
            });
        }
    }

    d.addEventListener("DOMContentLoaded", function (_event) {
        d.querySelectorAll(".c73").forEach((c73) => {
            init(c73);
        });
    });
})(document);
;
(function (d, w) {
    function setVideos(video) {
        mediaCommonNamespace.setMedia(video);
        mediaCommonNamespace.setMediaEventListenters(video, video.closest(".inner-container").querySelector(".play-pause-button"));

        video.play();
    }

    d.addEventListener("DOMContentLoaded", function (_event) {
        d.querySelectorAll(".c74").forEach((module) => {
            //check if first module using navigation.js added class
            if (module.classList.contains("nav-first-module-no-adjustment") || module.classList.contains("nav-first-module-adjustment")) {
                globalNamespace.setBodyColorTheme(module.classList);
            }
            const video = module.querySelector(".video");
            if (video != null) {
                setVideos(video);
            }
            function debounce(func, timeout = 300) {
                let timer;
                return (...args) => {
                    clearTimeout(timer);
                    timer = setTimeout(() => {
                        func.apply(this, args);
                    }, timeout);
                };
            }
            let windowWidth = w.innerWidth;
            w.addEventListener("resize",
                debounce(() => {
                    const newWidth = w.innerWidth;
                    //prevent mobile browsers from triggering due to browser height change on scroll
                    if (newWidth !== windowWidth) {
                        if (video != null) {
                            mediaCommonNamespace.setMedia(video);
                        }
                        windowWidth = newWidth;
                    }
                })
            );
        });

    });
})(document, window);
;
(function (w, d) {
    function setCardContainerHeight(module) {
        const cardContainer = module.querySelector(".card-container");
        const cardList = cardContainer.querySelector(".card-list");
        //remove height from mobile and exit
        if (window.innerWidth < 768) {
            cardList.style.height = "";
            return;
        }
        const cardItems = cardContainer.querySelectorAll(".card-item");
        const getTopAndBottomPadding = function (elem) {
            return parseInt(w.getComputedStyle(elem).paddingTop, 10) + parseInt(w.getComputedStyle(elem).paddingBottom, 10);
        }
        const getMarginTop = function (elem) {
            return parseInt(w.getComputedStyle(elem).marginTop, 10);
        }
        const leftHeight = Array.from(cardItems).reduce((prevVal, elem, index) => {
            if ((index % 2) === 0) {
                return prevVal + elem.offsetHeight + getTopAndBottomPadding(elem);
            }
            return prevVal;
        }, 0);
        const rightHeight = Array.from(cardItems).reduce((prevVal, elem, index) => {
            if (Math.abs(index % 2) === 1) {
                const marginTop = (index === 1) ? getMarginTop(elem) : 0
                return prevVal + elem.offsetHeight + getTopAndBottomPadding(elem) + marginTop;
            }
            return prevVal;
        }, 0);
        cardList.style.height = Math.max(leftHeight, rightHeight) + "px";
    }

    function init(module) {
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", function () {
            const animationContainer = module.querySelector(".animation-container");
            const cardContainer = animationContainer.querySelector(".card-container");
            const ctaContainer = animationContainer.querySelector(".cta-container");
            const windowHeight = () => w.innerHeight;
            const ctaOffset = () => windowHeight() - ctaContainer.offsetTop;
            const imageContainerHeight = () => cardContainer.offsetHeight < windowHeight() ? windowHeight() : cardContainer.offsetHeight;    
            const imagesTl = gsap.timeline();    
            imagesTl.fromTo(ctaContainer,
                { y: () => (imageContainerHeight() + ctaOffset()) },
                { y: 0, ease: "in", duration: 1 }, "start"
            );
            imagesTl.fromTo(cardContainer,
                { y: 0 },
                { y: () => (-(imageContainerHeight() + ctaOffset())), ease: "in", duration: 1 }, "start"
            );
            imagesTl.fromTo(cardContainer,
                { y: () => (-(imageContainerHeight() + ctaOffset())) },
                { y: () => (-(imageContainerHeight() + windowHeight())), ease: "in", duration: 1 },
            );
            //header stays at the top
            ScrollTrigger.create({
                trigger: animationContainer,
                start: "top",
                end: "200%",
                scrub: true,
                pin: true,
                pinSpacing: true,
                animation: imagesTl,
                invalidateOnRefresh: true,
            });
        });
    }
    function setVideos(videos) {
        videos.forEach(video => {
            const button = video.closest(".video-container").querySelector(`.play-pause-button`);
            mediaCommonNamespace.setMedia(video);
            mediaCommonNamespace.setMediaEventListenters(video, button);
        });
    }
    function handleVideos(module, play) {
        const videos = module.querySelectorAll(".video");
        if (videos && play) {
            videos.forEach(video => {
                video.play();
            });
        } else if (videos && !play) {
            videos.forEach(video => {
                video.pause();
            });
        }
    }
    let observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting === true) {
                    handleVideos(entry.target, true);
                } else {
                    handleVideos(entry.target, false);
                }
            });
        })
    //wait for images to load
    w.addEventListener("load", function (_event) {
        d.querySelectorAll(".c75").forEach((c75) => {
            setCardContainerHeight(c75);
            w.dispatchEvent(new Event('resize'));
        });
    });
    d.addEventListener("DOMContentLoaded", function (_event) {
        d.querySelectorAll(".c75").forEach((c75) => {
            if (c75.classList.contains("scroll-animation")) { init(c75) };
            ScrollTrigger.addEventListener("refreshInit", () => { 
                setCardContainerHeight(c75);
            });
            const videos = c75.querySelectorAll(".video");
            if (videos != null) {
                setVideos(videos);
            }
            observer.observe(c75);
        });
    });
})(window, document);
;
(function (d, w) {
    let sampleWaveFormData = [20, 30, 40, 50, 40, 60, 80, 50, 40, 60, 70, 60, 50, 40, 30, 50, 60, 40, 50, 60, 50, 70, 80, 60, 40, 30, 20, 40, 50, 60, 40, 70, 80, 60, 50, 30, 40, 50, 40, 60, 80, 60, 40, 60, 80, 60, 30, 40, 20, 30, 60, 40, 50, 60, 50, 70, 80, 60, 40, 30, 40, 30, 50, 60, 40, 70, 80, 60, 70, 80, 60, 40, 30, 20, 40, 50, 60, 40, 30, 60];
    function secondsToHMS(sec) {
        const hours = (sec - sec % 3600) / 3600;
        const minutes = ((sec - sec % 60) / 60) % 60;
        const seconds = sec % 60;
        return (hours ? hours + ":" : "") + (minutes ? minutes + ":" : "0:") + (seconds ? Math.floor(seconds).toString().padStart(2, '0') : "00")
    };
    function getProgressBarCount(container) {
        const containerWidth = container.offsetWidth;
        //width of bar plus padding on each side
        const barWidth = 14;
        return Math.floor(containerWidth / barWidth);        
    }
    function generateWaveForm(container, audio, audioBuffer) {
        container.innerHTML = "";
        const progressBarCount = getProgressBarCount(container);
        const waveFormArray = audioBuffer.slice(0, progressBarCount);
        waveFormArray.forEach((waveFormItem, index) => {
            const listItem = d.createElement("li");
            listItem.classList.add("audio-progress-item");
            const button = d.createElement("button");
            button.classList.add("btn", "button-progress");
            button.type = "button";
            button.dataset.cvxWaveIndex = index;
            const span = d.createElement("span");
            span.classList.add("button-progress-bar");
            span.style.height = `${waveFormItem}px`;
            button.appendChild(span);
            listItem.appendChild(button);
            container.appendChild(listItem);
            button.addEventListener("click", () => {
                const length = container.querySelectorAll(".audio-progress-item").length;
                audio.currentTime = audio.duration * (index / length);
            });
        });
    }
    
    d.addEventListener("DOMContentLoaded", function (_event) {
        d.querySelectorAll(".c76").forEach((moduleElem) => {
            const audio = moduleElem.querySelector(".audio");
            if (!audio) return;
            const progressContainer = moduleElem.querySelector(".audio-progress");
            mediaCommonNamespace.setMediaEventListenters(audio, moduleElem.querySelector(".play-pause-button"));
            audio.addEventListener("play", function() {
                mediaCommonNamespace.dispatchMediaStartEvent(audio);
            });
            w.addEventListener("media-start", function mediaStartListener(e) {
                if (audio !== e.target) {
                    audio.pause();
                }
            });
            audio.addEventListener("timeupdate", () => {
                const progressItems = progressContainer.querySelectorAll(".audio-progress-item");
                const currentTime = audio.currentTime;
                const progressCalc = progressItems.length * (currentTime / audio.duration);
                const floorProgressCalc = Math.floor(progressCalc);
                moduleElem.querySelector(".current-time").innerHTML = secondsToHMS(currentTime);
                progressItems.forEach((progressItem, index) => {
                    if (index < floorProgressCalc) {
                        progressItem.querySelector(".button-progress").classList.add("active");
                        progressItem.querySelector(".button-progress-bar").style.backgroundSize = "";
                        return;
                    } else if (index === floorProgressCalc) {
                        progressItem.querySelector(".button-progress").classList.add("active");
                        progressItem.querySelector(".button-progress-bar").style.backgroundSize = `${(progressCalc - floorProgressCalc) * 100}% 100%`;
                        return;
                    } 
                    progressItem.querySelector(".button-progress").classList.remove("active");
                    progressItem.querySelector(".button-progress-bar").style.backgroundSize = "";                        
                });
            });
            moduleElem.querySelector(".fast-forward-button").addEventListener("click", () => {
                audio.currentTime += 15;
            });
            moduleElem.querySelector(".rewind-button").addEventListener("click", () => {
                audio.currentTime -= 15;
            });
            generateWaveForm(progressContainer, audio, sampleWaveFormData);
            audio.addEventListener("loadeddata", () => {
                moduleElem.querySelector(".current-time").innerHTML = secondsToHMS(audio.currentTime);
                moduleElem.querySelector(".total-time").innerHTML = secondsToHMS(audio.duration);
            });
            function debounce(func, timeout = 300) {
                let timer;
                return (...args) => {
                    clearTimeout(timer);
                    timer = setTimeout(() => {
                        func.apply(this, args);
                    }, timeout);
                };
            }
            let windowWidth = w.innerWidth;
            w.addEventListener("resize",
                debounce(() => {
                    const newWidth = w.innerWidth;
                    //prevent mobile browsers from triggering due to browser height change on scroll
                    if (newWidth !== windowWidth) {
                        generateWaveForm(progressContainer, audio, sampleWaveFormData);
                        windowWidth = newWidth;
                    }
                })
            );
        });
    });
})(document, window);
;
(function (w, d) {
    const contentLoadedClass = "content-loaded";
    function ajax(dataToGet, elem, loadedClass, callback) {
        elem.classList.remove(loadedClass);
        scrollToTop();
        let Parameters = "?tags=" + dataToGet["tags"] + "&excludeLocalArticles=" + false + "&returnMatchingTagsOnly=" + true;
        if (dataToGet["page"] !== undefined)
            Parameters += "&page=" + dataToGet["page"];
        const ajaxUrl = "/api/sitecore/newsroom/Archive" + Parameters;
        fetch(ajaxUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            if (response.ok) {
                response.json().then(data => callback(data))
            }
        }).catch(error => { console.log(error); customError(elem, loadedClass); });
    }
    function loadArticles(elem) {
        const paramsObj = {};
        let tags = elem.getAttribute("data-cvx-tags");
        paramsObj["tags"] = tags;
        const searchParams = new URLSearchParams(window.location.search);
        //add page to paramsObj to send to ajax get
        searchParams.forEach((value, key) => {
            if (key === "page") {
                paramsObj[key] = value;
            }
        });
        ajax(paramsObj, elem, "content-loaded", function (data) {
            updateContent(elem, data);
        });

    }
    function customError(elem, loadedClass, message = "<p>An error has occured. Please refresh the browser and try again.</p>") {
        elem.classList.remove(loadedClass);
        elem.querySelector(".error-content").innerHTML = "";
        const errorContent = document.createElement("p");
        errorContent.innerHTML = `${message}`;
        elem.querySelector(".error-content").appendChild(errorContent);
        elem.classList.add(loadedClass);
    }
    function scrollToTop() {
        //scroll to top
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }
    function loadPage(elem, pageNumber) {
        if ('URLSearchParams' in window) {
            const paramsObj = {};
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.set("page", pageNumber);
            const newRelativePathQuery = w.location.pathname + '?' + searchParams.toString();
            history.pushState(null, '', newRelativePathQuery);
            let tags = elem.getAttribute("data-cvx-tags");
            paramsObj["tags"] = tags;
            for (const [key, value] of searchParams.entries()) {
                if (key === "page") {
                    paramsObj[key] = value;
                }
            }
            ajax(paramsObj, elem, contentLoadedClass, function (data) {
                updateContent(elem, data);
            });
        }
    }
    function renderPageItem(paginationContainer, pageNumber, numberOfPages, currentPage) {
        const pageItemTemplate = paginationContainer.querySelector('.page-item-template').content.firstElementChild.cloneNode(true);
        pageItemTemplate.querySelector(".page-number").innerHTML = pageNumber;
        pageItemTemplate.querySelector(".page-link").dataset.cvxPage = pageNumber;
        pageItemTemplate.querySelector(".total-pages").innerHTML = ` of ${numberOfPages}`;
        if (pageNumber === currentPage) {
            pageItemTemplate.classList.add("active");
        }
        paginationContainer.querySelector(".pagination").appendChild(pageItemTemplate);
    }
    function renderMiddlePageItems(paginationContainer, currentPage, pageNumberItemsToShow, numberOfPages) {

        //loop through pages 2 through second to last page
        for (let pageNumber = 2; pageNumber <= numberOfPages - 1; pageNumber++) {
            let pageNumberItemsToShowOffsetLeft = (pageNumberItemsToShow - 1) / 2;
            let pageNumberItemsToShowOffsetRight = (pageNumberItemsToShow - 1) / 2;
            //Handle first and last pages if current page is between number to show and end
            if (currentPage < pageNumberItemsToShow) {
                pageNumberItemsToShowOffsetLeft = currentPage - 1;
                pageNumberItemsToShowOffsetRight = pageNumberItemsToShow - pageNumberItemsToShowOffsetLeft;
            } else if (currentPage >= numberOfPages - pageNumberItemsToShowOffsetRight) {
                pageNumberItemsToShowOffsetRight = numberOfPages - currentPage;
                pageNumberItemsToShowOffsetLeft = pageNumberItemsToShow - pageNumberItemsToShowOffsetRight;
            }
            //render pages to show based on position from above
            if (pageNumber >= currentPage - pageNumberItemsToShowOffsetLeft && pageNumber <= currentPage + pageNumberItemsToShowOffsetRight) {
                renderPageItem(paginationContainer, pageNumber, numberOfPages, currentPage);
            }
        }
    }
    function ellipsisCheck(paginationContainer, currentPage, windowWidth, pageNumberItemsToShow, numberOfPages, position) {
        switch (position) {
            case "before":
                if (currentPage > (windowWidth >= 768 ? pageNumberItemsToShow - 1 : pageNumberItemsToShow)) {
                    renderEllipsis(paginationContainer);
                }
                break;
            case "after":
                if ((windowWidth >= 768 ? currentPage + pageNumberItemsToShow - 1 : currentPage + pageNumberItemsToShow) <= numberOfPages) {
                    renderEllipsis(paginationContainer);
                }
                break;
        }
    }
    function renderEllipsis(paginationContainer) {
        const ellipsisTemplate = paginationContainer.querySelector('.ellipses-template').content.firstElementChild.cloneNode(true);
        paginationContainer.querySelector(".pagination").appendChild(ellipsisTemplate);
    }
    function handlePageClick(elem, pageLink, paginationContainer, numberOfPages) {
        const activePage = parseInt(paginationContainer.querySelector(".active > .page-link").dataset.cvxPage)
        let pageToLoad = pageLink.dataset.cvxPage;
        if (pageToLoad === "next" && activePage < numberOfPages) { pageToLoad = activePage + 1; }
        if (pageToLoad === "prev" && activePage > 1) { pageToLoad = activePage - 1; }
        loadPage(elem, pageToLoad);
    }
    function handlePagination(elem, data) {
        const paginationContainer = elem.querySelector(".pagination-container");
        const windowWidth = window.innerWidth;
        const pageNumberItemsToShow = windowWidth >= 768 ? 5 : 3;
        paginationContainer.querySelector(".pagination").innerHTML = "";
        const count = parseInt(data.info.count, 10);
        const pageSize = parseInt(data.info.pagesize ? data.info.pagesize : 8, 10);
        if (count > pageSize) {
            //Start pagination
            const numberOfPages = Math.ceil(count / pageSize);
            const currentPage = parseInt(data.info.page, 10);
            const previousTemplate = paginationContainer.querySelector('.skip-to-previous-template').content.firstElementChild.cloneNode(true);
            if (currentPage === 1) {
                previousTemplate.classList.add("disabled");
            }
            paginationContainer.querySelector(".pagination").appendChild(previousTemplate);
            //page 1 always renders
            renderPageItem(paginationContainer, 1, numberOfPages, currentPage);
            ellipsisCheck(paginationContainer, currentPage, windowWidth, pageNumberItemsToShow, numberOfPages, "before");
            renderMiddlePageItems(paginationContainer, currentPage, pageNumberItemsToShow, numberOfPages);
            ellipsisCheck(paginationContainer, currentPage, windowWidth, pageNumberItemsToShow, numberOfPages, "after");
            //last page always renders
            renderPageItem(paginationContainer, numberOfPages, numberOfPages, currentPage);
            const nextTemplate = paginationContainer.querySelector('.skip-to-next-template').content.firstElementChild.cloneNode(true);
            if (currentPage === numberOfPages) {
                nextTemplate.classList.add("disabled");
                nextTemplate.querySelector(".page-link").disabled = true;
            }
            paginationContainer.querySelector(".pagination").appendChild(nextTemplate);
            paginationContainer.querySelectorAll(".page-link").forEach(pageLink => {
                pageLink.addEventListener("click", function (e) {
                    e.preventDefault();
                    handlePageClick(elem, pageLink, paginationContainer, numberOfPages);
                });
            });
        }

    }
    function pagination(elem, data) {

        let ro = new ResizeObserver(function () {
            handlePagination(elem, data);
        });
        ro.observe(d.body);
        handlePagination(elem, data);
    }
    function handleArticle(elem, contentContainer, group) {
        if (group.articles && group.articles.length > 0) {
            const listTemplate = elem.querySelector('.list-template').content.firstElementChild.cloneNode(true);
            group.articles.forEach(article => {
                const listItemTemplate = elem.querySelector('.list-item-template').content.firstElementChild.cloneNode(true);
                listItemTemplate.querySelector(".secondary-link").href = article.link.url;
                if (article.isexternalarticle) {
                    listItemTemplate.querySelector(".secondary-link").target = "_blank";
                }
                listItemTemplate.querySelector(".news-text").innerHTML = article.link.text;
                listItemTemplate.querySelector(".date").innerHTML = article.date;
                if (article.image.src !== null && article.image.src !== "") {
                    listItemTemplate.querySelector(".image-container").style.backgroundImage = `url('${article.image.src}')`;
                }
                if (article.contenttype !== "event" && article.topic !== null && article.topic !== "" && !article.hidetopic) {
                    listItemTemplate.querySelector(".category").innerHTML = article.topic;
                } else {
                    listItemTemplate.querySelector(".category").remove();
                }
                listTemplate.appendChild(listItemTemplate);

            });
            contentContainer.appendChild(listTemplate);
        }
    }
    function handleContent(elem, contentContainer, data) {
        if (data.groups && data.groups.length > 0) {
            data.groups.forEach(group => {
                //handle group date
                if (group.date) {
                    const dateHeaderTemplate = elem.querySelector('.header-template').content.firstElementChild.cloneNode(true);
                    dateHeaderTemplate.innerHTML = group.date;
                    contentContainer.appendChild(dateHeaderTemplate);
                }
                //handle articles

                handleArticle(elem, contentContainer, group);

            });
        }
    }
    function updateContent(elem, data) {
        const paginationContainer = elem.querySelector(".pagination-container");
        paginationContainer.querySelector(".pagination").innerHTML = "";
        const contentContainer = elem.querySelector(".content-container");
        contentContainer.innerHTML = "";
        if (data.info.count && data.info.count > 0) {
            //show pagination
            pagination(elem, data);
            handleContent(elem, contentContainer, data);
        } else {
            contentContainer.innerHTML = `<p>${data.info.message}</p>`
        }
        elem.classList.add(contentLoadedClass);
    }

    d.addEventListener("DOMContentLoaded", function (_event) {
        d.querySelectorAll(".c78").forEach(c78 => {
            //get queryParams, set ajaxUrl and set button states
            w.addEventListener('popstate', () => {
                loadArticles(c78);
            });
            loadArticles(c78);
        });
    });
})(window, document);;
(function (d, w) {
    let pathNameBaseRoute = "";
    const listClass = "accordion"
    const listItemClass = "accordion-item";
    const listButtonClass = "accordion-button";
    const buttonTextClass = "button-text";
    const filterShowClass = "filter-show";
    const genericErrorMessage = `<h2 class="type-subhead text-base padding-top-20">Content Unavailable</h2>`;
    const startTransitionBuffer = 25;
    let topicTransitionDuration;
    let scrollTriggerObj;
    function getWordsArray(list) {
        const listItems = list.querySelectorAll(`.${listItemClass}`)
        const wordsArray = [];
        listItems.forEach((item) => {
            const keywords = item.dataset.cvxKeywords.split(/\s*,\s*/);
            const title = item.querySelector(`.${buttonTextClass}`).textContent.toLowerCase();
            wordsArray.push({ title: title, keywords: keywords });
        });
        return wordsArray;
    }
    function getRangeMatches(wordsArray, module) {
        const matchObj = {};
        const shownFilterButtons = module.querySelectorAll(`.filter-button.${filterShowClass}`);
        const matches = [];
        shownFilterButtons.forEach(button => {
            matches.push(...button.dataset.cvxFilter);
        });
        matches.forEach(match => {
            const matchLowerCase = match.toLowerCase();
            wordsArray.forEach((item, index) => {
                if (item.title.startsWith(matchLowerCase)) {
                    matchObj[index] = {
                        startingIndices: [0],
                        matchedString: item.title.slice(0, 1)
                    };
                }
            });
        });
        return matchObj;
    }
    function getSearchMatches(wordsArray, searchText) {
        if (!searchText) return;
        const matchObj = {};
        const matchStringLowerCase = searchText.toLowerCase();
        wordsArray.forEach((item, index) => {
            let keywordMatch = item.keywords.find(element => element.toLowerCase().startsWith(matchStringLowerCase)) ? true : false;
            const startingIndices = [];
            const title = item.title;
            let indexOccurence = title.indexOf(matchStringLowerCase, 0);
            while (indexOccurence >= 0) {
                startingIndices.push(indexOccurence);
                indexOccurence = title.indexOf(matchStringLowerCase, indexOccurence + 1);
            }
            if (startingIndices.length > 0) {
                matchObj[index] = {
                    startingIndices: startingIndices,
                    matchedString: title.slice(startingIndices[0], startingIndices[0] + matchStringLowerCase.length)
                };
            } else if (keywordMatch) {
                matchObj[index] = { keywordMatch: keywordMatch };
            }
        });
        return matchObj;
    }
    const RouteManager = {
        handleUrlRoute(moduleElem) {
            const windowLocation = w.location;
            const hrefSplit = windowLocation.href.split(pathNameBaseRoute)[1]
            let route = windowLocation.pathname.split(pathNameBaseRoute)[1];
            if (hrefSplit && (hrefSplit.startsWith("#") || hrefSplit.startsWith("?"))) {
                route = RouteManager.generateNewRouteFromOldHashPath(windowLocation, pathNameBaseRoute);
            }
            if (route && route.startsWith("/")) route = route.slice(1);
            const shownAccordionItem = moduleElem.querySelector(".accordion-item.show");
            if (route && !route.startsWith("?")) {
                openTopicFromRoutePath(route, moduleElem, shownAccordionItem);
                return;
            }
            if (shownAccordionItem) closeCollapse(shownAccordionItem).then(() => {
                setModalOpenOnBody(true);
                closeTopic(shownAccordionItem);
            });
        },
        getCurrentLanguageCode(pathNameBaseRoute) {
            const pathname = window.location.pathname;
            const pathParts = pathname.split(pathNameBaseRoute);
            if (pathParts[0]) {
                const languageCode = pathParts[0].replace("/", "");
                return `/${languageCode}`;
            }
            return "";
        },

        getRoute(topicId = "", sectionId = "", searchParam = "") {
            return `${topicId}${searchParam}${(topicId && sectionId ? `#${topicId}.${sectionId}` : "")}`;
        },

        pushHistory({ topicId = "", sectionId = "", searchParam = "", pathNameBaseRoute }) {
            const windowLocation = window.location;
            if ("pushState" in history) {
                let route = RouteManager.getRoute(topicId, sectionId, searchParam);
                if (!route.startsWith("?")) route = `${route ? `/${route}` : ""}`;
                const fullRoute = `${windowLocation.origin}${RouteManager.getCurrentLanguageCode(pathNameBaseRoute)}${pathNameBaseRoute}${route}`;
                history.pushState("", d.title, fullRoute);
                // Canonical link
                const canonicalPath = `${pathNameBaseRoute}${(topicId ? `/${topicId}` : "")}`;
                const canonicalHref = `${windowLocation.origin}${canonicalPath}`;
                let canonicalLink = d.querySelector("link[rel='canonical']");
                if (canonicalLink) {
                    canonicalLink.href = canonicalHref;
                } else {
                    canonicalLink = d.createElement("link");
                    canonicalLink.setAttribute("rel", "canonical");
                    canonicalLink.setAttribute("href", canonicalHref);
                    d.head.appendChild(canonicalLink);
                }

                // Alternate links
                const alternateLinks = d.querySelectorAll("link[rel='alternate'][hreflang]");
                alternateLinks.forEach(link => {
                    const hreflang = link.getAttribute("hreflang");
                    if (hreflang) {
                        const alternateHref = `${windowLocation.origin}/${hreflang}${canonicalPath}`;
                        link.setAttribute("href", alternateHref);
                    }
                });
            } else {
                // Fallback for old browsers
                let scrollV = d.body.scrollTop;
                let scrollH = d.body.scrollLeft;
                windowLocation.hash = route;
                d.body.scrollTop = scrollV;
                d.body.scrollLeft = scrollH;
            }
        },

        generateNewRouteFromOldHashPath(windowLocation, pathNameBaseRoute) {
            const hash = windowLocation.hash;
            let [topicId, sectionId] = (hash ? hash.split(".") : ["", ""]);
            if (topicId.startsWith("#")) topicId = topicId.slice(1);
            const searchParam = windowLocation.search;
            const newRoute = (hash ? RouteManager.getRoute(topicId, sectionId, searchParam) : searchParam);
            RouteManager.pushHistory({ topicId, sectionId, searchParam, pathNameBaseRoute });
            return newRoute;
        }
    };
    const Highlighter = {
        highlight({ startingIndices, matchedString }, listItem) {
            if (!startingIndices || !matchedString) return;
            const target = listItem.querySelector(`.${listButtonClass} .${buttonTextClass}`);
            let remaining = startingIndices.slice(); // Copy to avoid mutation
            function highlightNode(node) {
                if (node.nodeType !== Node.TEXT_NODE || remaining.length === 0) return;

                let text = node.textContent;
                let offset = 0;
                let parent = node.parentNode;

                while (remaining.length > 0) {
                    let matchIndex = remaining[0] - offset;
                    if (matchIndex < 0 || matchIndex >= text.length) break;

                    // Split before, match, after
                    let before = text.slice(0, matchIndex);
                    let match = text.slice(matchIndex, matchIndex + matchedString.length);
                    let after = text.slice(matchIndex + matchedString.length);

                    // Create nodes
                    if (before) parent.insertBefore(document.createTextNode(before), node);
                    let mark = document.createElement("mark");
                    mark.className = "highlight";
                    mark.textContent = match;
                    parent.insertBefore(mark, node);

                    // Update text and offset
                    text = after;
                    offset += matchIndex + matchedString.length;
                    remaining.shift();
                }

                if (text) parent.insertBefore(document.createTextNode(text), node);
                parent.removeChild(node);
            }

            // Use TreeWalker to visit all text nodes
            let walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT, null, false);
            let textNodes = [];
            while (walker.nextNode()) textNodes.push(walker.currentNode);

            textNodes.forEach(highlightNode);
        },
        clear(listItems) {
            listItems.forEach(item => {
                const buttonText = item.querySelector(`.${listButtonClass} .${buttonTextClass}`);
                const textContent = buttonText.textContent
                buttonText.innerHTML = '';
                buttonText.textContent = textContent;
            });
        }
    };
    function filterItems(matchObj, elem, matchText) {
        const errorContainer = elem.closest(".accordion-container").querySelector(".error-container");
        errorContainer.classList.add("d-none");
        errorContainer.innerHTML = "";
        const listItems = elem.querySelectorAll(`.${listItemClass}`);
        Highlighter.clear(listItems);
        listItems.forEach((item) => item.classList.remove(filterShowClass));
        if (matchObj && Object.entries(matchObj).length > 0) {
            elem.classList.add("filtered");
            Object.entries(matchObj).forEach((entry) => {
                const [key, value] = entry;
                Highlighter.highlight(value, listItems[key]);
                listItems[key].classList.add(filterShowClass);
            });
            return;
        } else if (!matchText) {
            elem.classList.remove("filtered");
            return;
        }
        const paragraph = d.createElement("p");
        paragraph.classList.add(...["type-subhead", "text-base", "text-center"]);
        paragraph.textContent = `No results for ${matchText}`;
        errorContainer.appendChild(paragraph);
        errorContainer.classList.remove("d-none");
    }
    function unfilterItems(moduleElem) {
        const list = moduleElem.querySelector(`.${listClass}`);
        const listItems = list.querySelectorAll(`.${listItemClass}`);
        Highlighter.clear(listItems);
        listItems.forEach((item) => item.classList.remove(filterShowClass));
        list.classList.remove("filtered");
    }
    function setFilterEvents(moduleElem) {
        const input = moduleElem.querySelector(".filter-search");
        const filterButtons = moduleElem.querySelectorAll(".filter-button");
        const list = moduleElem.querySelector(`.${listClass}`);
        const wordsArray = getWordsArray(list);
        input.addEventListener("input", (e) => {
            //clear filter buttons
            filterButtons.forEach(button => button.classList.remove(filterShowClass));
            filterItems(getSearchMatches(wordsArray, e.target.value), list, e.target.value);
        });
        input.addEventListener("keydown", (e) => {
            const keyCode = e.keyCode;
            if (keyCode === 27) bootstrap.Collapse.getInstance(filterCollapse).hide();
        });
        filterButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                input.value = "";
                if (e.target.classList.contains(filterShowClass)) {
                    e.target.classList.remove(filterShowClass);
                    unfilterItems(moduleElem);
                    return;
                }
                filterButtons.forEach(button => button.classList.remove(filterShowClass));
                e.target.classList.add(filterShowClass);
                filterItems(getRangeMatches(wordsArray, moduleElem), list);
            });
        });
        const filterCollapse = moduleElem.querySelector(".filter-search-container");
        filterCollapse.addEventListener("shown.bs.collapse", () => {
            filterCollapse.querySelector(".filter-search").focus();
        });
        filterCollapse.addEventListener("hide.bs.collapse", () => {
            unfilterItems(moduleElem);
        });
    }
    function fetchApi(apiUrl, id) {
        const params = `?itemID=${id}`;
        return fetch(apiUrl + params, {
            method: 'GET'
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
        });
    }
    function setActive(accordionItem, currentSection) {
        const matchingLink = accordionItem.querySelector(
            `.section-nav a[href="#${currentSection}"]`
        );
        if (matchingLink) matchingLink.classList.add("active");
    }
    function setSectionScrollListener(accordionItem) {
        let currentSection = "";
        const navLinks = accordionItem.querySelectorAll(".section-nav-link");
        const sections = accordionItem.querySelectorAll(".topic-sections > .section-module");
        const firstChild = accordionItem.querySelector(".topic-sections > *:first-child");
        if (firstChild.classList.contains("section-module")) setActive(accordionItem, firstChild.id);

        accordionItem.querySelector(".accordion-dialog-body").addEventListener("scroll", () => {
            sections.forEach((section) => {
                const id = section.id;
                const sectionTop = section.offsetTop;
                const scrollY = Math.ceil(accordionItem.querySelector(".accordion-dialog-body").scrollTop);
                if (scrollY >= sectionTop) {
                    currentSection = id;
                }
            });
            navLinks.forEach((link) => link.classList.remove("active"));
            if (currentSection) {
                setActive(accordionItem, currentSection);
                currentSection = "";
            }
        });
    }
    function generateSectionNav(moduleElem, sections) {
        const fragment = new DocumentFragment();
        if (sections) {
            sections.forEach((section, index) => {
                const listItemTemplate = moduleElem.querySelector(".section-nav-item-template").content.firstElementChild.cloneNode(true);
                const anchor = listItemTemplate.querySelector(".section-nav-link");
                anchor.href = `#${section.id}`;
                anchor.querySelector(".section-nav-text").innerText = section.dataset.cvxName ? section.dataset.cvxName : `${section.id.split(".")[1]}`;
                fragment.appendChild(listItemTemplate);
            });
            return fragment;
        }
    }
    function getTopicContent(moduleElem, accordionItem) {
        return new Promise((resolve) => {
            accordionItem.classList.remove("error-loaded");
            const contentApiUrl = "/api/sitecore/EsgTopics/GetTopicContent";
            const contentId = accordionItem.dataset.cvxItemid;
            const contentLoaded = accordionItem.classList.contains("content-loaded");
            if (contentId && !contentLoaded) {
                //add here even if it fails to prevent double load
                //create topics
                fetchApi(contentApiUrl, contentId).then(data => {
                    if (!data.Error) {
                        const content = data.Response;
                        const contentTemplate = moduleElem.querySelector(".accordion-collapse-content-template").content.firstElementChild.cloneNode(true);
                        contentTemplate.querySelector(".topic-sections").innerHTML = content;
                        //Create section nav
                        const sections = contentTemplate.querySelectorAll(".section-module");
                        if (sections.length > 0) {
                            contentTemplate.querySelector(".section-nav-list").appendChild(generateSectionNav(moduleElem, sections));
                        } else {
                            contentTemplate.querySelector(".section-nav-container").remove();
                        }
                        accordionItem.querySelector(".content-spinner").classList.add("d-none");
                        accordionItem.querySelector(".accordion-collapse-content").appendChild(contentTemplate);
                        setSectionScrollListener(accordionItem);
                        accordionItem.classList.add("content-loaded");
                    } else {
                        console.log(data.Error);
                        accordionItem.classList.add("error-loaded");
                        accordionItem.querySelector(".accordion-collapse-content").innerHTML = genericErrorMessage;
                    }
                }).catch((e) => {
                    //handle promise Error
                    console.log(e);
                    accordionItem.classList.add("error-loaded");
                    accordionItem.querySelector(".accordion-collapse-content").innerHTML = genericErrorMessage;
                });
            }
            resolve(accordionItem);
        });
    }
    function openTopic(accordionItem) {
        return new Promise((resolve) => {
            //exit out of function if topic is already open
            if (accordionItem.classList.contains("show")) return;
            const accordionViewportOffset = accordionItem.closest(".accordion").getBoundingClientRect().top;
            const accordionItemViewportOffset = accordionItem.getBoundingClientRect().top;
            const accordionItemHeight = accordionItem.offsetHeight
            let startingTop = accordionItem.offsetTop - accordionItem.closest(".accordion").offsetTop;
            let endingTop = startingTop - accordionItemViewportOffset;
            if (accordionViewportOffset > 0) {
                startingTop = accordionItemViewportOffset - accordionViewportOffset;
                endingTop = -accordionViewportOffset;
            }
            accordionItem.style.top = `${startingTop}px`;
            accordionItem.dataset.cvxStartingTop = startingTop;
            if (accordionItem.nextElementSibling) accordionItem.nextElementSibling.style.marginTop = `${accordionItemHeight}px`;
            function afterTransition() {
                accordionItem.classList.remove("animating");
                accordionItem.classList.add("show");
                resolve(accordionItem);
            }
            setTimeout(function () {
                accordionItem.classList.add("animating-in");
                accordionItem.classList.add("animating");
                accordionItem.style.top = `${endingTop}px`;

                setTimeout(function () {
                    afterTransition();
                }, topicTransitionDuration);
            }, startTransitionBuffer);
        });
    }
    function closeTopic(accordionItem) {
        return new Promise((resolve) => {
            accordionItem.classList.add("transition-pause");
            accordionItem.classList.remove("show");
            accordionItem.classList.add("animating");
            const startingTop = accordionItem.dataset.cvxStartingTop;
            accordionItem.dataset.cvxStartingTop = "";
            function afterTransition() {
                if (accordionItem.nextElementSibling) accordionItem.nextElementSibling.style.marginTop = "";
                accordionItem.classList.remove("animating");
                accordionItem.style.top = "";
                scrollTriggerObj.refresh();
                resolve(accordionItem);
            }
            setTimeout(function () {
                accordionItem.classList.remove("transition-pause");
                accordionItem.style.top = `${startingTop}px`;
                setTimeout(function () {
                    afterTransition();
                }, topicTransitionDuration);
            }, startTransitionBuffer);
        });
    }
    function openCollapse(accordionItem) {
        return new Promise((resolve) => {
            const accordionCollapse = bootstrap.Collapse.getOrCreateInstance(accordionItem.querySelector(".accordion-collapse"));
            accordionCollapse.show();
            resolve(accordionItem);
        });
    }
    function closeCollapse(accordionItem) {
        return new Promise((resolve) => {
            const accordionCollapseElement = accordionItem.querySelector(".accordion-collapse");
            const accordionButton = accordionItem.querySelector(`.${listButtonClass}`);
            const accordionCollapse = bootstrap.Collapse.getOrCreateInstance(accordionCollapseElement);
            accordionCollapse.hide();
            accordionCollapseElement.addEventListener("hidden.bs.collapse", () => {
                accordionButton.classList.add("collapsed");
                accordionButton.setAttribute("aria-expanded", false);
                resolve(accordionItem);
            });
        });
    }
    function scrollToElement(accordionItem) {
        const hash = w.location.hash;
        const scrollContainer = accordionItem.querySelector(".accordion-dialog-body");
        if (hash) {
            const scrollDistance = d.getElementById(hash.replace("#", "")).offsetTop;
            scrollContainer.scroll({ top: scrollDistance });
            return;
        }
        scrollContainer.scroll({ top: 0 });
    }
    function createTopicItems(moduleElem, data) {
        const topics = data.Response;
        const accordion = moduleElem.querySelector(`.${listClass}`);
        topics.forEach(topic => {
            const topicTemplate = moduleElem.querySelector(".accordion-item-template").content.firstElementChild.cloneNode(true);
            const headerId = `${topic.TopicID}-header`;
            const collapseId = `${topic.TopicID}-collapse`;
            const topicButton = topicTemplate.querySelector(`.${listButtonClass}`);
            topicTemplate.id = topic.TopicID ? topic.TopicID : "";
            topicTemplate.dataset.cvxItemid = topic.ItemID ? topic.ItemID : "";
            topicTemplate.dataset.cvxKeywords = topic.Keywords ? topic.Keywords : "";
            topicTemplate.querySelector(".accordion-header").id = headerId;
            topicTemplate.querySelector(".accordion-collapse").id = collapseId;
            topicButton.querySelector(`.${buttonTextClass}`).innerText = topic.Name;
            topicButton.dataset.bsTarget = `#${collapseId}`;
            topicButton.href = `${RouteManager.getCurrentLanguageCode(pathNameBaseRoute)}${pathNameBaseRoute}/${topic.TopicID}`;
            topicButton.setAttribute("aria-controls", `#${collapseId}`);
            topicButton.setAttribute("aria-labelledby", `#${headerId}`);
            topicButton.addEventListener("click", (e) => {
                e.preventDefault();
                const windowLocationSearch = w.location.search;
                if (accordionButton.classList.contains("collapsed")) {
                    const id = e.target.closest(".accordion-item").id;
                    RouteManager.pushHistory({
                        topicId: id,
                        sectionId: "",
                        searchParam: windowLocationSearch,
                        pathNameBaseRoute: pathNameBaseRoute
                    });
                    RouteManager.handleUrlRoute(moduleElem);
                    return;
                }
                RouteManager.pushHistory({
                    topicId: "",
                    sectionId: "",
                    searchParam: windowLocationSearch,
                    pathNameBaseRoute: pathNameBaseRoute
                });
                RouteManager.handleUrlRoute(moduleElem);
            });
            const topicCollapseElement = topicTemplate.querySelector(".collapse");
            const accordionButton = topicTemplate.querySelector(`.${listButtonClass}`);
            topicCollapseElement.addEventListener("show.bs.collapse", () => {
                topicButton.classList.remove("collapsed");
                topicButton.setAttribute("aria-expanded", true);
            });
            topicCollapseElement.addEventListener("shown.bs.collapse", () => {
                scrollToElement(topicTemplate);
            });
            accordion.appendChild(topicTemplate);

        });
        moduleElem.querySelector(".topic-spinner").classList.add("d-none");
    }
    function initGSAP(moduleElem) {
        gsap.registerPlugin(ScrollTrigger);
        const headingContainer = moduleElem.querySelector(".topics-container");
        if (headingContainer) {
            //header stays at the top
            scrollTriggerObj = ScrollTrigger.create({
                trigger: headingContainer,
                start: "top",
                end: "bottom top",
                toggleClass: "pinned",
                scrub: true,
                pin: moduleElem.querySelector(".topics-filter-form"),
                pinSpacing: false,
                invalidateOnRefresh: true,
            });
        }
    }
    function setModalOpenOnBody(unset = false) {
        if (!unset) {
            d.body.classList.add("modal-open");
            d.body.style.overflow = "hidden";
            return;
        }
        d.body.classList.remove("modal-open");
        d.body.style.overflow = "";
    }
    function openSequence(accordionItem, accordionItemToClose) {
        openTopic(accordionItem).then(accordionItem => {
            setModalOpenOnBody();
            openCollapse(accordionItem).then(() => {
                if (accordionItemToClose && accordionItem.id !== accordionItemToClose.id) {
                    closeCollapse(accordionItemToClose).then(() => {
                        closeTopic(accordionItemToClose).then(() => {
                            accordionItem.classList.remove("animating-in");
                        });
                    }).catch((e) => {
                        console.log(e);
                        closeTopic(accordionItemToClose).then(() => {
                            accordionItem.classList.remove("animating-in");
                        });
                    });
                    return;
                }
                accordionItem.classList.remove("animating-in");
            });
        }).catch((e) => {
            //open topic timed out
            console.log(e);
            openCollapse(accordionItem);
        });
    }
    function openTopicFromRoutePath(route, moduleElem, accordionItemToClose = null) {
        try {
            const id = route.split("#")[0].split("?")[0];
            if (!id) return;
            const accordionItem = moduleElem.querySelector(`#${id}`);
            if (accordionItem && !accordionItem.classList.contains("show")) {
                //open topic first and load content
                if (!accordionItem.classList.contains("content-loaded")) {
                    getTopicContent(moduleElem, accordionItem).then(accordionItem => {
                        openSequence(accordionItem, accordionItemToClose);
                    }).catch((e) => {
                        //get topic Error
                        console.log(e);
                        accordionItem.classList.add("error-loaded");
                        accordionItem.querySelector(".accordion-collapse-content").innerHTML = genericErrorMessage;
                    });
                    return;
                }
                //open topic (content already loaded)
                openSequence(accordionItem, accordionItemToClose);
                return;
            }
            //topic is already open, scroll
            scrollToElement(accordionItem);
        } catch (e) {
            console.log(e);
        }
    }
    d.addEventListener("DOMContentLoaded", function (_event) {
        d.querySelectorAll(".c80").forEach((moduleElem) => {
            const itemPath = moduleElem.dataset.cvxItemPath;
            if (itemPath) pathNameBaseRoute = itemPath;
            topicTransitionDuration = parseInt(w.getComputedStyle(moduleElem).getPropertyValue("--topic-transition-duration"), 10);
            const topicApiUrl = "/api/sitecore/EsgTopics/GetTopics";
            const itemID = moduleElem.dataset.cvxItemid;
            const accordionErrorContainer = moduleElem.querySelector(".accordion-container .error-container");
            if (itemID) {
                //create topics
                fetchApi(topicApiUrl, itemID).then(data => {
                    if (!data.Error) {
                        createTopicItems(moduleElem, data);
                        setFilterEvents(moduleElem);
                        initGSAP(moduleElem);
                        RouteManager.handleUrlRoute(moduleElem);
                    } else {
                        //handle data.Error
                        accordionErrorContainer.innerHTML = genericErrorMessage;
                        accordionErrorContainer.classList.remove("d-none");
                        console.log(data.Error);
                    }
                }).catch(function (e) {
                    //handle promise Error
                    console.log(e);
                    accordionErrorContainer.innerHTML = genericErrorMessage;
                    accordionErrorContainer.classList.remove("d-none");
                });
            } else {
                //handle no main item id
                console.log("no main ItemID");
                accordionErrorContainer.innerHTML = genericErrorMessage;
                accordionErrorContainer.classList.remove("d-none");
            }
            w.addEventListener("popstate", function () {
                RouteManager.handleUrlRoute(moduleElem);
            }, false);
        });
    });
})(document, window);
;
(function (d) {
    const innerCardContainerClass = ".inner-card-container";
    const upperSubHeaderClass = ".upper-sub-header";
    const subHeaderClass = ".sub-header";
    const descriptionClass = ".description";
    function getWidth(elem) {
        return elem.offsetWidth;
    }
    function getHeight(elem) {
        return elem.offsetHeight;
    }
    function handleMobileCards(cards, slideCard) {
        cards.forEach((card, index) => {
            if (index === 0) {
                slideCard.to(card,
                    { y: () => -getHeight(card.querySelector(subHeaderClass)), duration: 2 }, `start-slide-${index}`
                );
            }
            slideCard.fromTo(card.querySelector(descriptionClass),
                { autoAlpha: 0 },
                { autoAlpha: 1, duration: 5 }, `start-slide-${index}+=4`
            );
            slideCard.to(card.querySelector(subHeaderClass),
                { fontSize: () => "36px", lineHeight: () => "40px", duration: 4 }, `start-slide-${index}+=4`
            );
            slideCard.fromTo(card.querySelector(innerCardContainerClass),
                { y: () => -getHeight(card.querySelector(".image-container")) },
                { y: 0, duration: 4 }, `start-slide-${index}+=4`
            );
            if (index < cards.length) {
                slideCard.to(cards[index + 1],
                    { y: () => -getHeight(cards[index + 1].querySelector(subHeaderClass)), duration: 1 }, `start-slide-${index}+=6`
                );
            }
            slideCard.addLabel(`slide-end-${index}`);
            if (index === cards.length - 1) {
                cards.forEach(card => {
                    slideCard.to(card,
                        { y: () => -getHeight(card), duration: 1 }, `slide-end-${index}`
                    );
                });
            }
        });
    }
    function handleDesktopCards(cards, slideCard) {
        cards.forEach((card, index) => {
            /*slide initial card into view*/
            if (index === 0) {
                slideCard.to(card,
                    { y: () => -getHeight(card.querySelector(upperSubHeaderClass)), duration: 2 }, `start-slide-${index}`
                );
            }
            if (index > 0) {
                slideCard.fromTo(cards[index - 1],
                    { width: () => getWidth(card.closest(".card-container")) },
                    { width: () => getWidth(card.closest(".card-container")) - 80, duration: 2 }, `start-slide-${index}+=4`
                );
                slideCard.to(cards[index - 1].querySelector(".upper-text-container"),
                    { autoAlpha: 1, duration: 2 }, `start-slide-${index}+=7`
                );
            }
            /*slides previous tab above new opening card*/
            for (let i = 1; i < index + 1; i++) {
                slideCard.to(cards[i - 1],
                    { y: () => `-=${getHeight(card.querySelector(upperSubHeaderClass))} / 2`, duration: 4 }, `start-slide-${index}+=4`
                );
            }
            
            slideCard.to(card.querySelector(".upper-text-container"),
                { autoAlpha: 0, duration: 0.5 }, `start-slide-${index}+=4`
            );
            /*slides next tab into view prior to opening from bottom */
            if (index < cards.length) {
                slideCard.to(cards[index + 1],
                    { y: () => -getHeight(cards[index + 1].querySelector(upperSubHeaderClass)), duration: 1 }, `start-slide-${index}+=6`
                );
            }
            slideCard.addLabel(`slide-end-${index}`);
            if (index === cards.length - 1) {
                slideCard.fromTo(cards[index],
                    { width: () => getWidth(card.closest(".card-container")) },
                    { width: () => getWidth(card.closest(".card-container")) - 80, duration: 1 }, `slide-end-${index}`
                );
            }
        });
    }
    function handleCard(card, slideCard, index, isDesktop) {

        card.addEventListener("click", () => {
            gsap.to(window,
                { scrollTo: slideCard.scrollTrigger.labelToScroll(`slide-end-${index}`), ease: "power2" },
            );
        });
        card.querySelectorAll(".slide-button").forEach(button => {
            button.addEventListener("click", () => {
                gsap.to(window,
                    { scrollTo: slideCard.scrollTrigger.labelToScroll(`slide-end-${index}`), ease: "power2" },
                );
            });
        });

        /*sliding of card from closed to open*/
        slideCard.to(card,
            { y: () => -getHeight(card) + (isDesktop ? 0 : (index + 1) * 28), duration: 4 }, `start-slide-${index}+=4`
        );
    }
    function init(module) {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        const mm = gsap.matchMedia();
        const cardContainer = module.querySelector(".card-container");
        const cards = cardContainer.querySelectorAll(".card");
        ScrollTrigger.saveStyles(cardContainer.querySelectorAll(subHeaderClass));
        mm.add(
            {
                isDesktop: "(min-width: 992px)",
                isMobileOrTablet: "(max-width: 991.99px)",
            },
            (context) => {
                const { isDesktop, isMobileOrTablet } = context.conditions;
                const slideCard = gsap.timeline();
                const duration = parseFloat(module.dataset.cvxScrollDuration) || 100;
                const endTrigger = () => `${cards.length * duration}%`;
                if (isMobileOrTablet) {
                    handleMobileCards(cards, slideCard);
                } else {
                    handleDesktopCards(cards, slideCard);
                }
                cards.forEach((card, index) => {
                    const dotLottieCanvas = card.querySelector(".dotlottie");
                    if (dotLottieCanvas) {
                        const dotLottieSrc = dotLottieCanvas.dataset.cvxMediaDesktop;
                        const scrollAnimation = dotLottieCanvas.dataset.cvxScrollAnimation || false;
                        const dotLottie = new DotLottieWeb.DotLottie({
                            autoplay: false,
                            loop: false,
                            canvas: dotLottieCanvas,
                            src: dotLottieSrc ? dotLottieSrc : "",
                        });
                        function playDotLottie() {
                            dotLottie.play();
                        }
                        handleCard(card, slideCard, index, isDesktop);

                        dotLottie.addEventListener("load", () => {
                            if (scrollAnimation === "true") {
                                dotLottie.addEventListener("load", () => {
                                    const playhead = { frame: 0 };
                                    slideCard.to(playhead, {
                                        frame: dotLottie.totalFrames - 1,
                                        ease: "none",
                                        onUpdate: () => dotLottie.setFrame(playhead.frame),
                                        duration: 8
                                    }, `start-slide-${index}+=4`);
                                });
                                return;
                            }
                            slideCard.call(playDotLottie, null, `start-slide-${index}+=4`);
                        });
                    } else {
                        handleCard(card, slideCard, index, isDesktop)
                    }
                });
                ScrollTrigger.create({
                    trigger: module,
                    start: "bottom bottom",
                    end: endTrigger,
                    scrub: false,
                    pin: true,
                    pinSpacing: true,
                    invalidateOnRefresh: true,
                    /*markers: {
                        startColor: "green",
                        endColor: "fuchsia",
                        indent: 0,
                        fontWeight: "bold",
                    }*/
                }); 
                const scrollTriggerStart = isDesktop ? "top 60%" : "bottom bottom";
                ScrollTrigger.create({
                    trigger: module,
                    start: `${scrollTriggerStart}`,
                    end:  endTrigger,
                    scrub: 1,
                    pin: false,
                    pinSpacing: true,
                    animation: slideCard,
                    invalidateOnRefresh: true,
                    /*markers: {
                        startColor: "green",
                        endColor: "fuchsia",
                        indent: 0,
                        fontWeight: "bold",
                    }*/
                }); 
                ScrollTrigger.addEventListener("refresh", function () {
                    gsap.to(cardContainer, { autoAlpha:1 })
                });
            });
    }
    window.addEventListener("load", function () {
        d.querySelectorAll(".c81").forEach((module) => {
            init(module);
        });
    });
})(document);;
(function (d, w) {
    function isDesktop() {
        return w.matchMedia("screen and (min-width: 768px)").matches;
    }
    let originalContainerHeightProperty;
    function setHeight(moduleElem) {
        const textContainer = moduleElem.querySelector(".text-container");
        const textContainerHeight = textContainer.clientHeight;
        const moduleStyles = getComputedStyle(moduleElem);
        if (!originalContainerHeightProperty) originalContainerHeightProperty = parseInt(moduleStyles.getPropertyValue("--container-height"), 10);
        if (textContainerHeight > originalContainerHeightProperty) {
            moduleElem.style.setProperty("--container-height", textContainerHeight + "px");
        } else {
            moduleElem.style.setProperty("--container-height", originalContainerHeightProperty + "px");
        }
    }
    d.addEventListener("DOMContentLoaded", function (_event) {
        d.querySelectorAll(".c82").forEach((moduleElem) => {
            setHeight(moduleElem);
            let windowWidth = w.innerWidth;
            w.addEventListener("resize",
                globalNamespace.debounce(() => {
                    const newWidth = w.innerWidth;
                    //prevent mobile browsers from triggering due to browser height change on scroll
                    if (newWidth !== windowWidth && isDesktop()) {
                        //do something
                        setHeight(moduleElem);
                        windowWidth = newWidth;
                    }
                })
            );
        });
    });
})(document, window);
;
(function (d) {
    d.addEventListener("DOMContentLoaded", function () {
        d.querySelectorAll(".c84").forEach(carouselParent => {
            const splideItem = carouselParent.querySelector(".splide");
            const splideSlides = splideItem.querySelectorAll(".splide__slide");
            if (splideSlides.length > 1) splideItem.querySelector(".control").classList.add("show");
            const splide = new Splide(splideItem, {
                perPage: 1,
                gap: 0,
                perMove: 1,
                focus: 'center',
                padding:  0 ,
                trimSpace: false,
                start: 0,
                pagination: false,

            });
            splide.mount();
            DialogNamespace.refreshSplideOnDialogShown(splideItem, splide);
        });
    });
})(document);;
(function (d, w) {
    function grabTextNodes(elem) {
        const walker = document.createTreeWalker(elem, NodeFilter.SHOW_TEXT, null);
        const nodes = [];
        while (walker.nextNode()) {
            nodes.push(walker.currentNode);
        }
        return nodes;
    }    
    function getLineBreaks(elem) {
        // our Range object form which we'll get the characters positions
        const range = document.createRange();
        // here we'll store all our lines
        const lines = [];
        let left = 0;
        // initial position
        let prevLeft = null;
        let lineText = "";
        let startRange = null;
        grabTextNodes(elem).forEach(node => {
            let nodeText = node.textContent;
            const textLength = nodeText.length;
            let rangeIndex = 0;
            let textIndex = 0;
            while (rangeIndex <= textLength) {
                range.setStart(node, rangeIndex);
                if (rangeIndex < textLength - 1) {
                    range.setEnd(node, rangeIndex + 1); // wrap the range (for Chrome...)
                }
                left = range.getBoundingClientRect().right;
                if (prevLeft === null) {
                    // first pass
                    startRange = range.cloneRange();
                } else if (left < prevLeft) { // line break
                    // store the current line content
                    lineText += nodeText.slice(0, textIndex);
                    startRange.setEnd(range.endContainer, range.endOffset);
                    lines.push(lineText);
                    // start a new line
                    lineText = "";
                    nodeText = nodeText.slice(textIndex);
                    textIndex = 0;
                    startRange = range.cloneRange();
                }
                rangeIndex++;
                textIndex++;
                prevLeft = left;
            }
            // add the remaining text from this node into the current line content
            lineText += nodeText;
        });
        // push the last line
        startRange.setEnd(range.endContainer, range.endOffset);
        lines.push(lineText);
        return lines;
    }
    function addIntersectionObserver(description) {
        const delay = 750;
        const lines = description.querySelectorAll(".line-animation");
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        lines.forEach((line, index) => {
                            setTimeout(() => {
                                line.classList.add("fill");
                            }, index * delay);
                        })
                        //only trigger once
                        observer.unobserve(description);
                    }
                });
            },
            { rootMargin: "0% 0px -50% 0px", threshold: [0.0] }
        );

        observer.observe(description);
    }
    let originalContent = null;
    function updateTextContent(description) {
        if (!originalContent) originalContent = description.innerHTML;
        description.innerHTML = originalContent;
        const lineBreaks = getLineBreaks(description);
        if (lineBreaks) {
            description.innerHTML = "";
            lineBreaks.forEach(lineBreak => {
                const span = d.createElement("span");
                span.classList.add("line-animation");
                span.innerHTML = lineBreak;
                description.appendChild(span);
            });
            addIntersectionObserver(description);
        }
    }

    d.addEventListener("DOMContentLoaded", function (_event) {
        d.querySelectorAll(".c85").forEach((module) => {
            const description = module.querySelector('.description');
            updateTextContent(description);
            let windowWidth = w.innerWidth;
            w.addEventListener("resize",
                globalNamespace.debounce(() => {
                    const newWidth = w.innerWidth;
                    //prevent mobile browsers from triggering due to browser height change on scroll
                    if (newWidth !== windowWidth) {
                        //do something
                        updateTextContent(description);
                        windowWidth = newWidth;
                    }
                })
            );
        });
    });
})(document, window);;
(function (d) {
    const filterButtonClass = ".filter-button";
    const buttonTextClass = ".button-text";
    const glyphClass = ".cta-glyphicon";
    function setDropdownButtonInnerHtml(moduleElem, currentTarget) {
        const innerHtml = currentTarget.querySelector(buttonTextClass).innerHTML;
        const dropdownButtonSpan = moduleElem.querySelector(`.dropdown-button ${buttonTextClass}`);
        if (!dropdownButtonSpan) return;
        dropdownButtonSpan.innerHTML = innerHtml;
        if (currentTarget) {
            currentTarget.closest(".dropdown-menu").querySelectorAll(filterButtonClass).forEach(button => button.classList.remove("active"));
            currentTarget.classList.add("active");
        }
    }
    function setPrimaryCTA(moduleElem, currentTarget) {
        const primaryCTA = moduleElem.querySelector(".primary-cta");
        if (!primaryCTA) return;
        const updatedUrl = currentTarget.dataset.cvxUrl;
        if (updatedUrl) primaryCTA.href = updatedUrl;
        const primaryGlyph = primaryCTA.querySelector(glyphClass);
        const updatedGlyph = currentTarget.querySelector(glyphClass);
        if (primaryGlyph && updatedGlyph) primaryGlyph.replaceWith(updatedGlyph.cloneNode(true));
        let screenReaderElem = primaryCTA.querySelector(".visually-hidden");
        if (!screenReaderElem) {
            screenReaderElem = d.createElement("span");
            screenReaderElem.classList.add("visually-hidden");
            primaryCTA.appendChild(screenReaderElem);
        }
        const updatedInnerHtml = currentTarget.querySelector(buttonTextClass).innerHTML;
        if (updatedInnerHtml) screenReaderElem.innerHTML = updatedInnerHtml;

    }
    d.addEventListener("DOMContentLoaded", function () {
        d.querySelectorAll(".n05r").forEach(moduleElem => {
            const filterButtons = moduleElem.querySelectorAll(filterButtonClass);
            if (!filterButtons.length > 0) return;
            const firstFilterButton = filterButtons[0];
            setDropdownButtonInnerHtml(moduleElem, firstFilterButton);
            setPrimaryCTA(moduleElem, firstFilterButton);
            filterButtons.forEach(button => {
                button.addEventListener("click", e => {
                    const currentTarget = e.currentTarget;
                    setDropdownButtonInnerHtml(moduleElem, currentTarget);
                    setPrimaryCTA(moduleElem, currentTarget);
                });
            });
        });
    });
})(document);;
(function (w, d) {
    const popoverButtons = d.querySelectorAll('[data-bs-toggle="popover"]');
    popoverButtons.forEach((popoverButton) => {
        const popoverContent = popoverButton.nextElementSibling;
        if (popoverContent && popoverContent.classList.contains("popover-content")) {
            popoverButton.dataset.bsContent = popoverContent.innerHTML;
            const popover = new bootstrap.Popover(popoverButton);
            //close other popovers when opening new one
            popoverButton.addEventListener("show.bs.popover", (e) => {
                d.querySelectorAll(".popover.show").forEach((shownPopover) => {
                    const button = d.querySelector(`[aria-describedby=${shownPopover.id}]`);
                    const bootstrapPopover = bootstrap.Popover.getOrCreateInstance(button);
                    bootstrapPopover.hide();
                });
            });
            //handle close-button
            popoverButton.addEventListener("inserted.bs.popover", (e) => {
                const id = e.target.getAttribute("aria-describedby");
                if (!id) return;
                const closeButton = d.querySelector(`#${id} .close-button`);
                closeButton.addEventListener("click", (e) => {
                    e.preventDefault();
                    popover.hide();
                });
            });
            //add mouseover with sticky popover (different from default hover)
            popoverButton.addEventListener("mouseover", (e) => {
                popover.toggle();
            });
        }
    });
})(window, document);
;
(function (d, $) {  
    function pauseVideos() {
        if (YT_players) {
            for (let j in YT_players) {
                if ($(this).find("#" + YT_players[j].vid).length === 1 && YT_players[j].getPlayerState && YT_players[j].getPlayerState() === 1) YT_players[j].pauseVideo();
            }
        }
    }
    function handleKeyDownEvents($elem) {
        $elem.find(".carousel-control").on("keydown", function (e) {
            const keyCode = e.keyCode || e.which,
                $target = $(e.target);
            // Handle Spacebar even - keyCode=32
            if (keyCode === 32) {
                //keyCode = e.keyCode || e.which,
                e.preventDefault();
                $target.click();
            }
        });
        //tab/indicators activate with arrow keys
        $elem.find(".carousel-indicators .slide-link").on("keydown", function (e) {
            const keyCode = e.keyCode || e.which,
                $target = $(e.target);
            switch (keyCode) {
                case 37:
                    //left arrow
                    e.preventDefault();
                    e.stopPropagation();
                    $target.closest(".carousel-indicators").find(".slide-link").attr("tabindex", "-1");
                    if ($target.closest("li").is(":first-child")) {
                        //first child go to last child
                        $target.closest(".carousel-indicators").find("li").last().find(".slide-link").attr("tabindex", "0").focus().click();
                        return;
                    } 
                    //not first child go to previous
                    $target.closest("li").prev().find(".slide-link").attr("tabindex", "0").focus().click();
                    break;
                case 39:
                    //right arrow
                    e.preventDefault();
                    e.stopPropagation();
                    $target.closest(".carousel-indicators").find(".slide-link").attr("tabindex", "-1");
                    if ($target.closest("li").is(":last-child")) {
                        //last child go to first child
                        $target.closest(".carousel-indicators").find("li").first().find(".slide-link").attr("tabindex", "0").focus().click();
                        return;
                    } 
                    //not last child go to next
                    $target.closest("li").next().find(".slide-link").attr("tabindex", "0").focus().click();
                    break;
            }
        });
            //add tab index to active indicator
    }
    function handleClickEvents($elem) {
        //mobile arrows activate on spacebar press
        $elem.find(".carousel-indicators .slide-link").on("click", function (e) {
            const $target = $(e.target);
            let $slideLink = $(e.target);
            if (!$slideLink.hasClass("slide-link")) {
                $slideLink = $target.closest(".slide-link");
            }
            $slideLink.parent().children().attr("tabindex", "-1");
            $slideLink.attr("tabindex", "0");
        });
    }
    $(d).ready(function () {
        $(".carousel-common.match-height").each(function () {
            const carouselId = "#" + $(this).attr("id");
            //keep slide itemes same height
            $(carouselId + " .carousel-inner > .item").matchHeight({
                byRow: false
            });
        });      
        $(".carousel").on('slide.bs.carousel', function () {
            pauseVideos();
        });

        $('.modal').on('hidden.bs.modal', function () {
            pauseVideos();
        });
        //carousel-a fix to allow keyboard navigation
        $(".carousel-a, .carousel-b, .carousel-social").each(function () {
            handleKeyDownEvents($(this));
            handleClickEvents($(this));
        });
        //Applies to carousel-a, carousel-b, carousel-c
        $(".carousel-common.numbering").each(function () {
            const carouselId = "#" + $(this).find(".carousel").attr("id");

            //apply numbering 
            let totalItems = $(this).find('.item').length;
            let currentIndex = $(carouselId + ' .item.active').index() + 1;

            $(carouselId + ' .num').text(currentIndex + ' of ' + totalItems);

            $(carouselId).on('slid.bs.carousel', function () {
                totalItems = $(this).find('.item').length;
                currentIndex = $(carouselId + ' .item.active').index() + 1;
                $(carouselId + ' .num').text(currentIndex + ' of ' + totalItems);
            });
        });

        //Applies to carousel-social
        $(".carousel-common.numbering").each(function () {
            const carouselId = "#" + $(this).find(".carousel").attr("id");

            //apply numbering 
            let totalItems = $(this).find('.carousel-item').length;
            let currentIndex = $(carouselId + ' .carousel-item.active').index() + 1;

            $(carouselId + ' .num').text(currentIndex + ' of ' + totalItems);

            $(carouselId).on('slid.bs.carousel', function () {
                totalItems = $(this).find('.carousel-item').length;
                currentIndex = $(carouselId + ' .carousel-item.active').index() + 1;
                $(carouselId + ' .num').text(currentIndex + ' of ' + totalItems);
            });
        });

        //Applies to carousel-b
        $(".carousel-common.nav-labels").each(function () {
            const carouselId = "#" + $(this).find(".carousel").attr("id");
            let totalItems = $(carouselId + ' .item').length;
            let currentIndex = $(carouselId + ' .item.active').index() + 1;

            $(carouselId + ' .back').hide();
            $(carouselId + ' .num').text(currentIndex + ' of ' + totalItems);
            $(carouselId + ' .next .next-text').text("next: " + $(carouselId + ' .item.active').next().find(".nav-text").data("nav-text"));

            $(carouselId).on('slid.bs.carousel', function () {

                const carouselData = $(this).data('bs.carousel');
                currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));

                const nextSlideIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active + .item'));
                const nextSlide = carouselData.$items[nextSlideIndex];
                let nextSlideTitle = $(nextSlide).find(".nav-text").data("nav-text");

                if (currentIndex !== 0) {
                    $(carouselId + ' .back').show();
                    const previousSlideTitle = $(carouselId + ' .item.active').prev().find(".nav-text").data("nav-text");
                    $(carouselId + ' .back .back-text').text("previous: " + previousSlideTitle);
                } else {
                    $(carouselId + ' .back').hide();
                }

                if (!nextSlideTitle) {
                    nextSlideTitle = "start";
                }

                const text = (currentIndex + 1) + " of " + totalItems;

                $(carouselId + ' .num').text(text);
                $(carouselId + ' .next .next-text').text("next: " + nextSlideTitle);
            });
        });        
    });
})(document, jQuery);;
(function (d, $) {
    $(d).ready(function () {
        if (window.location.hash) {
            const title = decodeURIComponent(window.location.hash.replace("#", ""));
            $('.drawers .panel a.collapsed[data-bs-toggle=collapse]').each(function() {
                if ($(this).find("h4").text().trim().toLowerCase() === title.trim().toLowerCase()) {
                    $(this).click();
                    $('html, body').animate({scrollTop: ($(this).offset().top - 150)}, 2000);
                }
            });
        }
        //drawer fix to allow spacebar keyboard navigation
        $(".drawers").each(function () {
            //mobile arrows activate on spacebar press
            $(this).find(".panel-heading > a").on("keydown", function (e) {
                const keyCode = e.keyCode || e.which,
                    $target = $(e.target);
                if (keyCode === 32) {
                    e.preventDefault();
                    $target.click();
                }
            });
        });
    });
})(document, jQuery);
;
(function (w, d, $) {
    function setHeroHeight() {
        $(".hero").each(function () {
            const $this = $(this),
                  bottomHeight = $(this).find(".bottom").height(),
                  heroContentHeight = $(this).find(".hero-content").height(),
                  margins = 40;
            const $heroBg = $this.find(".background");
            //if hero has the bg image, we need to adjust the bg container height
            if ($this.hasClass("has-bg-img")) {
                const windowHeight = $(w).height(),
                      navHeight = $("nav").height(),
                      breadcrumbHeight = $this.parent().prev().children(".breadcrumb-container").height();
                $heroBg.height(windowHeight - navHeight - breadcrumbHeight);
            } else {
                $heroBg.height("auto");
            }
            //Set min heights based off elements
            $this.css("min-height", bottomHeight + heroContentHeight + margins + "px");
            $heroBg.css("min-height", bottomHeight + heroContentHeight + margins + "px");
        });
    }
    $(d).ready(function () {
        setHeroHeight();
        $(w).resize(function () {
            setHeroHeight();
        });
    });
})(window, document, jQuery);;
(function (w, d, $) {
    //resize boxes to keep them square
    function resize() {
        //$(w).width(); does not return the viewport width as related to the bootstrap breakpoints (as it excludes the the width of the scrollbars. The breakpoints include the total viewport width
        const breakpoints = [767, 991, 1199];
        const windowWidth = w.innerWidth;
        
        $(".grid .box.lg").each(function () {
            $(this).height($(this).width());
        });

        $(".grid .box.md").each(function () {
            if (windowWidth > breakpoints[0] && windowWidth <= breakpoints[1]) {
                $(this).height($(this).width() / 2);
                return;
            } 
            $(this).height($(this).width() * 2);
        });

        $(".grid .box.sm").each(function () {
            if (windowWidth > 0 && windowWidth <= breakpoints[0]) {
                $(this).height($(this).width() * 3);
                return;
            } 
            $(this).height($(this).width() / 3);
        });

        $(".grid .flip-card").each(function () {
            $(this).find("h3").css({ "font-size": ($(this).width() / 14) + 'px' });
            $(this).find("h4").css({ "font-size": ($(this).width() / 18) + 'px' });
            $(this).find(".card-bottom.tags").css({ "font-size": (($(this).width() / 18) > 16 ? 16 : ($(this).width() / 18)) + 'px' });
        });
    }

    function setCookie(name, value) {
        d.cookie = name + "=" + value + "; expires=0";
    }

    function getCookie(name) {
        return (d.cookie.indexOf(name + '=') >= 0) ? new RegExp(name + '=([^ ;]+)', 'gi').exec(d.cookie)[1] : '';
    }

    function setView(view) {
        if (view === "list") {
            $(".stories-view").removeClass("grid");
            $(".stories-view").addClass("list");
            $(".toggle-grid-view-grid").removeClass("selected");
            $(".toggle-grid-view-list").addClass("selected");

        } else if (view === "grid") {
            $(".stories-view").removeClass("list");
            $(".stories-view").addClass("grid");
            $(".toggle-grid-view-list").removeClass("selected");
            $(".toggle-grid-view-grid").addClass("selected");
        }
        resize();
    }

    $(d).ready(function () {
        //keep cols same height
        $(".filter-bar.match-height .col").matchHeight({
            byRow: true
        });
        const cname = "stories-view";
        if ($(".toggle-grid-view-grid").length === 1) {
            let cvalue = "grid";
            if (getCookie(cname) === "list") cvalue = "list";
            setView(cvalue);
            setCookie(cname, cvalue);
        } else {
            setView("grid");
        }

        $(w).resize(function () {            
            resize();
        });

        $(".toggle-grid-view-grid").click(function () {
            setView("grid");
            setCookie(cname, "grid");
        });

        $(".toggle-grid-view-list").click(function () {
            setView("list");
            setCookie(cname, "list");
        });

        
        //Delay initial resize function to give enough time for load
        setTimeout(function () {
            resize();
            $(".stories-view").css({ "visibility": "visible" });
        }, 200);
    });

})(window, document, jQuery);

;
(function (w, d, $) {

    let slidesPerRow = 1;
    let slidesToScroll = 1;
    let slidesToShow = 1;
    function reinit(id) {
        $("#" + id + " .slider").slick("unslick");
        init(id);
    }
    function init(id) {

        $("#" + id + " .slider").slick({
            slide: "#" + id + " .slider .item",
            accessibility: true,
            cvxAccessibilityOverride: true,
            focusOnChange: true,
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next"><span class="glyphicon glyphicon-chevron-caret-right" aria-hidden="true"></span><span class="sr-only">Next</span></button>',
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous"><span class="glyphicon glyphicon-chevron-caret-left" aria-hidden="true"></span><span class="sr-only">Previous</span></button>',
            slidesPerRow: slidesPerRow,
            slidesToScroll: slidesToScroll,
            slidesToShow: slidesToShow,
            //dots: true,
            infinite: false,
        }).on("beforeChange", function (event, _slick, _currentSlide, nextSlide) {
            $.carouselMoveTrack($(event.currentTarget).closest(".x10").attr("id"), nextSlide);
        });
    }
    $(d).ready(function () {
        $('.x10').each(
            function () {
                const id = $(this).attr('id');
                init(id);
                $.carouselInitTrack(id);
            }
        );
    });
    //trap resize and only trigger once stopped for 500ms
    let resizeVar,
        newWidth,
        windowWidth = w.innerWidth;
    $(w).on("resize orientationchange", function (event) {
        newWidth = w.innerWidth;
        if (event.type === "orientationchange") {
            //DO RESIZE HERE
            clearTimeout(resizeVar);
            resizeVar = setTimeout(doneResizing, 500);
            return false;
        } else {
            if ($.isMobile() && newWidth !== windowWidth) {
                //DO RESIZE HERE
                clearTimeout(resizeVar);
                resizeVar = setTimeout(doneResizing, 500);
                return false;
            }
            if (!$.isMobile()) {
                //DO RESIZE HERE
                clearTimeout(resizeVar);
                resizeVar = setTimeout(doneResizing, 500);
            }
        }
    });

    function doneResizing() {
        windowWidth = newWidth;
        $('.x10').each(
            function () {
                const id = $(this).attr('id');
                reinit(id);
                $.carouselInitTrack(id);
                $.carouselMoveTrack(id, 0);
            }
        );
    }

})(window, document, jQuery);
;
