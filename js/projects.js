/* ==========================================================
   projects.js — project data, search, filters, and images
   Jaber Saripada's academic portfolio
   ========================================================== */

(function () {
  "use strict";

  var PROJECTS = [
    {
      id: 1,
      title: "Want.3D.Print",
      category: "Systems",
      type: "Academic project",

      summary: "A proposed web-based keychain customization and ordering system designed to support product customization, order submission, order management, and pickup/delivery notifications. Completed as an academic project but not commercially deployed.",

      images: [
        {
          src: "assets/images/projects/want3dprint-admin.png",
          alt: "Want.3D.Print admin home page"
        },
        {
          src: "assets/images/projects/want3dprint-customer.png",
          alt: "Want.3D.Print customer home page"
        }
      ],

      tags: [
        "Product customization",
        "Order management",
        "Order scheduling",
        "Research and documentation",
        "System analysis"
      ],

      features: [
        "Product customization",
        "Order submission",
        "Order management",
        "Pickup and delivery notifications"
      ],

      year: 2026,
      date: "August–October 2026",
      status: "Completed academic project — proposed system only",

      url: "projects/project-1.html"
    },

    {
      id: 2,
      title: "Cisco Packet Tracer Networking Lab",
      category: "Networking",
      type: "Academic lab",

      summary: "An ongoing networking laboratory involving VLAN implementation, switch trunking, routing, IP addressing, DHCP services, network security, and troubleshooting using Cisco Packet Tracer.",

      images: [
        {
          src: "assets/images/projects/packet-tracer-topology.jpg",
          alt: "Cisco Packet Tracer network topology practice"
        },
        {
          src: "assets/images/projects/pax-silica-network.jpg",
          alt: "Pax Silica networking topology"
        }
      ],

      tags: [
        "VLAN configuration",
        "Switch trunking",
        "Inter-VLAN routing",
        "Router configuration",
        "IP addressing",
        "Subnetting",
        "DHCP",
        "Static routing",
        "Network troubleshooting",
        "Network security",
        "Cisco Packet Tracer"
      ],

      features: [
        "VLAN creation and configuration",
        "Switch trunking",
        "Inter-VLAN routing",
        "DHCP configuration",
        "Static routing",
        "Network troubleshooting",
        "Network security configuration"
      ],

      year: 2026,
      date: "August 2026–Present",
      status: "Currently in progress",

      url: "projects/project-2.html"
    },

    {
      id: 3,
      title: "Quality of Service (QoS) Simulation Lab",
      category: "Networking",
      type: "Academic project",

      summary: "A NET 301 project exploring network traffic management, FIFO, LLQ, CBWFQ, WRED, traffic marking, and a physical Packet Jeepney simulation.",

      images: [],

      document: {
        title: "QoS Network Rescue Report",
        description: "Operation: Fiesta Night Rescue · PDF · 12 pages",
        url: "files/qos-simulation-report.pdf"
      },

      tags: [
        "Quality of Service",
        "QoS",
        "FIFO",
        "LLQ",
        "CBWFQ",
        "WRED",
        "DSCP",
        "Traffic prioritization",
        "Packet simulation",
        "Network congestion"
      ],

      features: [
        "FIFO demonstration",
        "LLQ and CBWFQ",
        "Traffic marking",
        "WRED",
        "Shaping and policing",
        "Packet Jeepney simulation"
      ],

      year: 2026,
      date: "August–October 2026",
      status: "Completed academic project",

      url: "projects/project-3.html"
    },

    {
      id: 4,
      title: "Noir Coffee",
      category: "Graphic Design",
      type: "CEEL 301 activity",

      summary: "A coffee shop promotional poster featuring a warm brown and cream color palette, expressive typography, and organized menu and price information.",

      images: [
        {
          src: "assets/images/ceel/noir-coffee.png",
          alt: "Noir Coffee promotional poster design"
        }
      ],

      tags: [
        "Digital marketing graphics",
        "Promotional poster",
        "Typography",
        "Layout design",
        "Color palette"
      ],

      features: [
        "Promotional poster layout",
        "Menu and price presentation",
        "Typography and visual hierarchy"
      ],

      year: 2026,
      date: "2026",
      status: "Completed CEEL 301 class activity",
      url: "projects/ceel-1.html"
    },

    {
      id: 5,
      title: "Starlight",
      category: "Graphic Design",
      type: "CEEL 301 activity",

      summary: "A brand identity design featuring metallic silver star and crescent elements with a gothic-inspired wordmark against a dark background.",

      images: [
        {
          src: "assets/images/ceel/starlight.png",
          alt: "Starlight brand identity design"
        }
      ],

      tags: [
        "Brand design",
        "Visual identity",
        "Logo design",
        "Gothic typography",
        "Metallic effects"
      ],

      features: [
        "Metallic visual elements",
        "Star and crescent motifs",
        "Custom wordmark"
      ],

      year: 2026,
      date: "2026",
      status: "Completed CEEL 301 class activity",
      url: "projects/ceel-2.html"
    },

    {
      id: 6,
      title: "The 3D Banana",
      category: "Graphic Design",
      type: "CEEL 301 activity",

      summary: "A traditional drawing activity featuring a banana rendered with colored pencils, shading, and techniques that create shape and dimension.",

      images: [
        {
          src: "assets/images/ceel/3d-banana.jpg",
          alt: "Three-dimensional banana colored pencil drawing"
        }
      ],

      tags: [
        "Traditional drawing",
        "Colored pencil",
        "Shading",
        "Form and dimension",
        "Illustration"
      ],

      features: [
        "Hand-drawn illustration",
        "Colored-pencil rendering",
        "Pencil shading"
      ],

      year: 2026,
      date: "August 5, 2026",
      status: "Completed CEEL 301 class activity",
      url: "projects/ceel-3.html"
    },

    {
      id: 7,
      title: "UNTHREAD",
      category: "Graphic Design",
      type: "CEEL 301 activity",

      summary: "A bold typography and logo composition featuring distressed neon-green lettering and a thread-inspired graphic against a dark background.",

      images: [
        {
          src: "assets/images/ceel/unthread.png",
          alt: "UNTHREAD typography and logo design"
        }
      ],

      tags: [
        "Typography",
        "Logo design",
        "Distressed texture",
        "Streetwear branding",
        "Visual composition"
      ],

      features: [
        "Bold display typography",
        "Distressed texture",
        "Thread-inspired graphic"
      ],

      year: 2026,
      date: "2026",
      status: "Completed CEEL 301 class activity",
      url: "projects/ceel-4.html"
    }
  ];

  var grid = document.getElementById("project-grid");
  var searchInput = document.getElementById("project-search");
  var selCategory = document.getElementById("filter-category");
  var selType = document.getElementById("filter-type");
  var selYear = document.getElementById("filter-year");
  var countEl = document.getElementById("result-count");
  var emptyEl = document.getElementById("no-results");
  var clearButtons = document.querySelectorAll(".js-clear");

  if (!grid || !searchInput || !selCategory || !selType || !selYear) {
    return;
  }

  var state = {
    query: "",
    category: "All",
    type: "All",
    year: "All"
  };

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function uniqueValues(field) {
    var out = [];

    PROJECTS.forEach(function (p) {
      if (out.indexOf(p[field]) === -1) {
        out.push(p[field]);
      }
    });

    return out.sort();
  }

  function fillSelect(select, allLabel, values) {
    var html = '<option value="All">' + esc(allLabel) + "</option>";

    values.forEach(function (v) {
      html += '<option value="' + esc(v.value) + '">' +
        esc(v.label) + "</option>";
    });

    select.innerHTML = html;
  }

  function buildFilters() {
    fillSelect(
      selCategory,
      "All categories",
      uniqueValues("category").map(function (c) {
        return { value: c, label: c };
      })
    );

    fillSelect(
      selType,
      "All types",
      uniqueValues("type").map(function (t) {
        return { value: t, label: t };
      })
    );

    var years = [];

    PROJECTS.forEach(function (p) {
      if (p.year !== null && p.year !== undefined && p.year !== "") {
        if (years.indexOf(String(p.year)) === -1) {
          years.push(String(p.year));
        }
      }
    });

    years.sort().reverse();

    fillSelect(
      selYear,
      "All years",
      years.map(function (y) {
        return { value: y, label: y };
      })
    );
  }

  function metaLine(label, value) {
    return '<span class="muted"><strong>' +
      label + ":</strong> " + esc(value || "Not specified") +
      "</span>";
  }

  function imageGallery(p) {
    if (!p.images || p.images.length === 0) {
      return "";
    }

    var images = p.images.map(function (img) {
      return (
        '<div class="project-image-item">' +
          '<img src="' + esc(img.src) + '"' +
          ' alt="' + esc(img.alt) + '"' +
          ' loading="lazy">' +
        "</div>"
      );
    }).join("");

    return (
      '<div class="project-image-gallery" aria-label="Project screenshots">' +
        images +
      "</div>"
    );
  }

  function documentPreview(p) {
    if (!p.document) {
      return "";
    }

    return (
      '<div class="project-document-preview">' +
        '<span class="project-document-icon" aria-hidden="true">PDF</span>' +
        '<div class="project-document-info">' +
          '<strong>' + esc(p.document.title) + '</strong>' +
          '<span class="muted">' + esc(p.document.description) + '</span>' +
        '</div>' +
      '</div>'
    );
  }

  function documentLink(p) {
    if (!p.document) {
      return "";
    }

    return (
      '<a class="link-arrow" href="' + esc(p.document.url) +
      '" download="QoS-Network-Rescue-Report.pdf">' +
      'Download Report </a>'
    );
  }

  function cardHTML(p) {
    var tags = p.tags.map(function (t) {
      return "<li>" + esc(t) + "</li>";
    }).join("");

    return (
      '<article class="card reveal visible">' +

        imageGallery(p) +

        '<div class="card-meta">' +
          '<span class="badge">' + esc(p.type) + "</span>" +
          '<span class="badge badge-outline">' + esc(p.category) + "</span>" +
        "</div>" +

        "<h3>" + esc(p.title) + "</h3>" +

        '<p class="muted">' + esc(p.summary) + "</p>" +

        documentPreview(p) +

        '<p style="font-size:.88rem;margin:.75rem 0;display:grid;gap:.2rem">' +
          metaLine("Year", p.year) +
          metaLine("Date", p.date) +
          metaLine("Status", p.status) +
        "</p>" +

        '<ul class="tags">' + tags + "</ul>" +

        '<div style="margin-top:1rem;display:flex;flex-wrap:wrap;gap:1rem">' +

          (p.url
            ? '<a class="link-arrow" href="' + esc(p.url) +
              '" aria-label="View details for ' + esc(p.title) +
              '">View details </a>'
            : "") +

          documentLink(p) +

        "</div>" +

      "</article>"
    );
  }

  function matches(p) {
    if (state.category !== "All" && p.category !== state.category) {
      return false;
    }

    if (state.type !== "All" && p.type !== state.type) {
      return false;
    }

    if (state.year !== "All" && String(p.year) !== state.year) {
      return false;
    }

    if (!state.query) {
      return true;
    }

    var haystack = [
      p.title,
      p.summary,
      p.category,
      p.type,
      p.status || "",
      p.year ? String(p.year) : "",
      p.date || "",
      p.tags.join(" "),
      p.features.join(" "),
      p.document ? p.document.title : ""
    ].join(" ").toLowerCase();

    return state.query.toLowerCase().split(/\s+/).every(function (word) {
      return haystack.indexOf(word) !== -1;
    });
  }

  function render() {
    var list = PROJECTS.filter(matches);

    grid.innerHTML = list.map(cardHTML).join("");

    if (emptyEl) {
      emptyEl.hidden = list.length !== 0;
    }

    if (countEl) {
      countEl.textContent = "Showing " + list.length +
        " of " + PROJECTS.length + " projects";
    }
  }

  function clearAll() {
    state = {
      query: "",
      category: "All",
      type: "All",
      year: "All"
    };

    searchInput.value = "";
    selCategory.value = "All";
    selType.value = "All";
    selYear.value = "All";

    render();
    searchInput.focus();
  }

  searchInput.addEventListener("input", function () {
    state.query = searchInput.value.trim();
    render();
  });

  selCategory.addEventListener("change", function () {
    state.category = selCategory.value;
    render();
  });

  selType.addEventListener("change", function () {
    state.type = selType.value;
    render();
  });

  selYear.addEventListener("change", function () {
    state.year = selYear.value;
    render();
  });

  clearButtons.forEach(function (btn) {
    btn.addEventListener("click", clearAll);
  });

  buildFilters();
  render();

})();