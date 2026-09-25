// =========================================================
// FOOTER YEAR
// =========================================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// =========================================================
// MOBILE NAV TOGGLE
// =========================================================

const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

navToggle?.addEventListener("click", () => {
  navLinks?.classList.toggle("open");
});

navLinks?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    navLinks?.classList.remove("open");
  });
});


// =========================================================
// SKILL BARS
// =========================================================

const skillRows = document.querySelectorAll(".skill-row");

if ("IntersectionObserver" in window) {

  const skillObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          const bar =
            entry.target.querySelector(".bar i");

          const level =
            entry.target.getAttribute("data-level");

          if (bar && level) {
            bar.style.width = level + "%";
          }

          skillObserver.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.4
    }
  );

  skillRows.forEach((row) => {
    skillObserver.observe(row);
  });

}


// =========================================================
// PROJECT DETAIL DATA
// =========================================================

const projectData = {

  "revit-villa": {

    tag: "REVIT ARCHITECTURE",

    title: "Residential Villa – Revit BIM Model",

    description:
      "Developed a detailed residential villa model in Revit, including architectural planning, floor layouts, elevations and 3D visualization.",

    mainImage:
      "project_images/coverimage.jpeg",

    tools: [
      "Revit Architecture",
      "BIM Modelling",
      "3D Visualization",
      "Architectural Design"
    ],

    objective:
      "The objective was to develop a complete BIM-based residential villa model with accurate architectural planning and coordinated building components.",

    scope: [
      "Prepared architectural floor plans.",
      "Developed floor layouts and building elevations.",
      "Created sections and architectural views.",
      "Developed a detailed 3D BIM model.",
      "Prepared the model for visualization and presentation."
    ],

    role:
      "Responsible for developing the architectural BIM model, preparing views and coordinating the major building components within Revit.",

    workflow: [
      "Planning – Prepared the initial architectural layout.",
      "Architectural Modelling – Developed walls, floors, doors, windows and other components.",
      "Documentation – Generated plans, elevations and sections.",
      "Coordination – Checked model consistency and building elements.",
      "Visualization – Prepared the final 3D presentation views."
    ],

  gallery: [
  "project_images/front.jpeg",
  "project_images/back.jpeg",
  "project_images/left.jpeg",
  "project_images/right.jpeg",
  "project_images/top.jpeg",
  "project_images/ground.jpeg",
  "project_images/first floor.jpeg",
  "project_images/elevation.jpeg",
  
],

galleryCaptions: [
  "Front View",
  "Back View",
  "Left Side View",
  "Right Side View",
  "Top View",
  "Ground Floor Plan",
  "First Floor Plan",
  "Elevation View"
  
],
    downloads: [
      {
        name: "Revit Architectural Model",
        type: "RVT File",
        file: "villa.rvt"
      },
      // {
      //   name: "Project Drawing Set",
      //   type: "PDF",
      //   file: "files/revit-villa-drawings.pdf"
      // }
    ]

  },


  "revit-building": {

    tag: "REVIT BIM MODELLING",

    title: "G+2 Building – BIM Model",

    description:
      "Created a G+2 building model using Revit, covering architectural components, floor plans, elevations, sections and 3D building development.",

    mainImage:
      "project_images/first.png",

    tools: [
      "Revit Architecture",
      "BIM",
      "3D Modelling",
      "Building Documentation"
    ],

    objective:
      "The project focused on creating a coordinated BIM model of a G+2 multi-storey building with detailed architectural elements, 3D visualization, and proper project documentation.",

    scope: [
      "Created floor plans for Ground, First, and Second floors.",
      "Developed building elevations and sections.",
      "Modelled architectural components such as walls, doors, windows, floors, stairs, and roofs.",
      "Prepared 3D views of the G+2 building.",
      "Organized sheets, views, and project documentation."
    ],
role:
  "Developed the G+2 Revit model and prepared architectural views, drawings and supporting documentation.",

workflow: [
  "Planning 🏗️ Established Ground, First and Second floor levels and basic building layout.",
  "Modelling 🧱 Developed architectural elements for the G+2 building.",
  "Documentation 📐 Generated floor plans, elevations and sections for all levels.",
  "Review 🔍 Checked model accuracy, consistency and alignment across floors.",
  "Visualization 🏢 Prepared final 3D views of the G+2 building."
],

    gallery: [
      "project_images/1(2).jpeg",
      "project_images/1(3).jpeg",
      "project_images/1(4).jpeg",
      "project_images/1(5).jpeg",
      "project_images/1(6).jpeg",
      "project_images/1(7).jpeg"
    ],

    downloads: [
      {
        name: "Revit Building Model",
        type: "RVT File",
        file: "BRIJESH DIXIT FINAL PROJECT REVIT.rvt"
      },
      // {
      //   name: "Building Drawings",
      //   type: "PDF",
      //   file: "files/revit-building-drawings.pdf"
      // }
    ]

  },


  "revit-structure": {

    tag: "REVIT STRUCTURE",

    title: "Structural Building Model – Revit",

   description: 
  "Developed a structural BIM model for a G+1 building with structural elements including columns, beams, slabs and foundations.",

mainImage: 
  "project_images/cover(2).jpeg",

tools: [
  "Revit Structure",
  "Structural BIM",
  "RCC Modelling",
  "3D Structural Model"
],

objective: 
  "The objective was to create a coordinated structural BIM model representing the primary structural system of a G+1 building.",

scope: [
  "Created structural levels and grids for the G+1 building.",
  "Modelled columns and beams.",
  "Developed slabs and foundations.",
  "Prepared structural views for the building.",
  "Reviewed the overall structural model."
],

role: 
  "Worked on structural BIM development and modelling of major structural elements including columns, beams, slabs and foundations for the G+1 building.",

workflow: [
  "Planning – Established Ground and First floor levels and structural grids.",
  "Structural Modelling – Added columns and beams for the G+1 structure.",
  "Slab Development – Created structural slabs for the building floors.",
  "Foundation Modelling – Developed foundation elements.",
  "Review – Checked the completed G+1 structural model."
],
    gallery: [
      "project_images/2(1).jpeg",
      "project_images/2(2).jpeg",
      "project_images/2(7).jpeg",
      "project_images/2(4).jpeg",
      "project_images/2(5).jpeg",
      "project_images/2(6).jpeg"
    ],

    downloads: [
      {
        name: "Structural Revit Model",
        type: "RVT File",
        file: "files/revit-structure.rvt"
      },
      // {
      //   name: "Structural Drawings",
      //   type: "PDF",
      //   file: "files/revit-structure-drawings.pdf"
      // }
    ]

  },


  "autocad-building": {

    tag: "AUTOCAD DESIGN",

    title: "Residential Building – AutoCAD Design",

    description:
      "Prepared detailed architectural drawings for a residential building using AutoCAD, including floor plans, elevations, sections and detailed drafting.",

    mainImage:
      "project_images/cover(4).jpeg",

    tools: [
      "AutoCAD",
      "2D Drafting",
      "Architectural Planning",
      "Technical Drawing"
    ],

    objective:
      "The project focused on producing accurate 2D architectural drawings for a residential building.",

    scope: [
      "Prepared detailed floor plans.",
      "Developed building elevations.",
      "Created sections.",
      "Added dimensions and annotations.",
      "Prepared final architectural drawings."
    ],

    role:
      "Prepared and organized the architectural drawings using AutoCAD with focus on accurate drafting, dimensions and presentation.",

    workflow: [
      "Planning – Established the initial building layout.",
      "Drafting – Created the floor plan.",
      "Detailing – Added dimensions and annotations.",
      "Elevation – Developed building elevations.",
      "Documentation – Prepared the final drawing sheets."
    ],

    gallery: [
      "project_images/4(1).jpeg",
      "project_images/4(2).jpeg",
      "project_images/4(3).jpeg",
      "project_images/4(4).jpeg",
      "project_images/4(5).jpeg",
      "project_images/4(6).jpeg",
      "project_images/4(7).jpeg",
      "project_images/4(8).jpeg",
      "project_images/4(9).jpeg"
    ],
    galleryCaptions: [
  "First floor plan",
  "Second floor plan",
  "Elevation",
  "Section",
  "Column placement",
  "Centre line plan",
  "Area statement",
  "Schedule of openings "
  
],

    downloads: [
      {
        name: "AutoCAD Drawing",
        type: "DWG File",
        file: "25_Brijeshdixit_AutoCad FINAL.dwg"
      },
      // {
      //   name: "Drawing Sheet",
      //   type: "PDF",
      //   file: "files/autocad-building.pdf"
      // }
    ]

  }

};


// =========================================================
// PROJECT DETAIL
// =========================================================

function openProject(projectId) {

  const project = projectData[projectId];

  if (!project) {
    console.error("Project not found:", projectId);
    return;
  }


  const detailTag =
    document.getElementById("detailTag");

  const detailTitle =
    document.getElementById("detailTitle");

  const detailDescription =
    document.getElementById("detailDescription");

  const detailMainImage =
    document.getElementById("detailMainImage");

  const detailObjective =
    document.getElementById("detailObjective");

  const detailRole =
    document.getElementById("detailRole");


  if (detailTag)
    detailTag.textContent = project.tag;

  if (detailTitle)
    detailTitle.textContent = project.title;

  if (detailDescription)
    detailDescription.textContent =
      project.description;

  if (detailMainImage)
    detailMainImage.src =
      project.mainImage;

  if (detailObjective)
    detailObjective.textContent =
      project.objective;

  if (detailRole)
    detailRole.textContent =
      project.role;


  // =======================================================
  // TOOLS
  // =======================================================

  const tools =
    document.getElementById("detailTools");

  if (tools) {

    tools.innerHTML = "";

    project.tools.forEach((tool) => {

      const span =
        document.createElement("span");

      span.textContent = tool;

      tools.appendChild(span);

    });

  }


  // =======================================================
  // SCOPE
  // =======================================================

  const scope =
    document.getElementById("detailScope");

  if (scope) {

    scope.innerHTML = "";

    project.scope.forEach((item) => {

      const li =
        document.createElement("li");

      li.textContent = item;

      scope.appendChild(li);

    });

  }


  // =======================================================
  // WORKFLOW
  // =======================================================

  const workflow =
    document.getElementById("detailWorkflow");

  if (workflow) {

    workflow.innerHTML = "";

    project.workflow.forEach(
      (step, index) => {

        const div =
          document.createElement("div");

        div.className =
          "workflow-item";

        div.innerHTML =
          `<strong>${index + 1}.</strong> ${step}`;

        workflow.appendChild(div);

      }
    );

  }


  // =======================================================
  // GALLERY
  // =======================================================

  const gallery =
    document.getElementById("detailGallery");

  if (gallery) {

    gallery.innerHTML = "";

    project.gallery.forEach(
      (image, index) => {

        const img =
          document.createElement("img");

        img.src = image;

        img.alt =
          `${project.title} - Image ${index + 1}`;

        img.loading = "lazy";

        img.addEventListener(
          "click",
          () => {

          openLightbox(
          project.gallery,
          index,
          project.title,
          project.galleryCaptions
        );

          }
        );

        gallery.appendChild(img);

      }
    );

  }


  // =======================================================
  // DOWNLOADS
  // =======================================================

  const downloads =
    document.getElementById("detailDownloads");

  if (downloads) {

    downloads.innerHTML = "";

    project.downloads.forEach((file) => {

      const item =
        document.createElement("div");

      item.className =
        "download-item";

      item.innerHTML = `

        <div class="download-info">

          <div class="download-icon">
            📄
          </div>

          <div>

            <div class="download-name">
              ${file.name}
            </div>

            <div class="download-type">
              ${file.type}
            </div>

          </div>

        </div>

        <a
          href="${file.file}"
          class="download-btn"
          download>
          Download
        </a>

      `;

      downloads.appendChild(item);

    });

  }

  // =======================================================
  // SHOW PROJECT DETAIL
  // =======================================================

  const detailPage =
    document.getElementById("projectDetail");

  if (!detailPage) return;

  detailPage.setAttribute(
    "aria-hidden",
    "false"
  );

  detailPage.scrollTop = 0;

  document.body.style.overflow =
    "hidden";

  detailPage.classList.add("active");

}


// =========================================================
// CLOSE PROJECT
// =========================================================

function closeProject() {

  const detailPage =
    document.getElementById("projectDetail");

  if (!detailPage) return;

  detailPage.classList.remove("active");

  detailPage.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow = "";

  closeLightbox();
}


// =========================================================
// CREATE PROJECT LIGHTBOX
// =========================================================

let currentGallery = [];
let currentImageIndex = 0;
let currentProjectTitle = "";
let currentGalleryCaptions = [];

let projectLightbox = null;
let lightboxImage = null;
let lightboxCounter = null;
let lightboxCaption = null;


// =========================================================
// BUILD LIGHTBOX
// =========================================================

function createProjectLightbox() {

  /*
    Remove ALL old project lightboxes.

    This fixes the duplicate projectLightbox
    problem in your current HTML.
  */

  document
    .querySelectorAll("#projectLightbox")
    .forEach((element) => {
      element.remove();
    });


  // =======================================================
  // CREATE
  // =======================================================

  projectLightbox =
    document.createElement("div");

  projectLightbox.id =
    "projectLightbox";

  projectLightbox.className =
    "project-lightbox";

  projectLightbox.setAttribute(
    "aria-hidden",
    "true"
  );


  // =======================================================
  // HTML
  // =======================================================

  projectLightbox.innerHTML = `

    <div class="lightbox-top">

      <span
        class="lightbox-counter"
        id="lightboxCounter">
        Image 1 of 1
      </span>

      <button
        type="button"
        class="lightbox-close"
        id="projectLightboxClose"
        aria-label="Close gallery">
        ×
      </button>

    </div>


    <div class="lightbox-viewer">

      <button
        type="button"
        class="lightbox-arrow lightbox-prev"
        id="lightboxPrev"
        aria-label="Previous image">
        ‹
      </button>


      <div class="lightbox-image-wrapper">

        <img
          id="lightboxImage"
          src=""
          alt="Project Image">

      </div>


      <button
        type="button"
        class="lightbox-arrow lightbox-next"
        id="lightboxNext"
        aria-label="Next image">
        ›
      </button>

    </div>


    <div
      class="lightbox-caption"
      id="lightboxCaption">
      Project Image
    </div>

  `;


  document.body.appendChild(
    projectLightbox
  );


  // =======================================================
  // REFERENCES
  // =======================================================

  lightboxImage =
    document.getElementById(
      "lightboxImage"
    );

  lightboxCounter =
    document.getElementById(
      "lightboxCounter"
    );

  lightboxCaption =
    document.getElementById(
      "lightboxCaption"
    );


  const closeButton =
    document.getElementById(
      "projectLightboxClose"
    );

  const nextButton =
    document.getElementById(
      "lightboxNext"
    );

  const previousButton =
    document.getElementById(
      "lightboxPrev"
    );


  // =======================================================
  // CLOSE
  // =======================================================

  closeButton?.addEventListener(
    "click",
    (event) => {

      event.stopPropagation();

      closeLightbox();

    }
  );


  // =======================================================
  // NEXT
  // =======================================================

  nextButton?.addEventListener(
    "click",
    (event) => {

      event.stopPropagation();

      nextLightboxImage();

    }
  );


  // =======================================================
  // PREVIOUS
  // =======================================================

  previousButton?.addEventListener(
    "click",
    (event) => {

      event.stopPropagation();

      previousLightboxImage();

    }
  );


  // =======================================================
  // CLICK BACKGROUND
  // =======================================================

  projectLightbox.addEventListener(
    "click",
    (event) => {

      if (
        event.target ===
        projectLightbox
      ) {

        closeLightbox();

      }

    }
  );

}


// =========================================================
// OPEN LIGHTBOX
// =========================================================

function openLightbox(
  gallery,
  index,
  title,
  captions
) {

  if (
    !projectLightbox
  ) {
    createProjectLightbox();
  }


  currentGallery =
    gallery || [];

  currentImageIndex =
    index || 0;

  currentProjectTitle =
    title || "Project Image";

  currentGalleryCaptions =
  captions || [];


  updateLightbox();


  projectLightbox.classList.add(
    "active"
  );

  projectLightbox.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";

}


// =========================================================
// UPDATE LIGHTBOX
// =========================================================

function updateLightbox() {

  if (
    !currentGallery.length ||
    !lightboxImage
  ) {
    return;
  }


  lightboxImage.src =
    currentGallery[
      currentImageIndex
    ];


  lightboxImage.alt =
    `${currentProjectTitle} - Image ${currentImageIndex + 1}`;


  if (lightboxCounter) {

    lightboxCounter.textContent =
      `Image ${currentImageIndex + 1} of ${currentGallery.length}`;

  }


  if (lightboxCaption) {

  lightboxCaption.textContent =
    currentGalleryCaptions[currentImageIndex] ||
    `Image ${currentImageIndex + 1}`;

}


  /*
    Restart image animation.
  */

  lightboxImage.style.animation =
    "none";

  void lightboxImage.offsetWidth;

  lightboxImage.style.animation =
    "lightboxImageIn 0.25s ease";

}


// =========================================================
// NEXT IMAGE
// =========================================================

function nextLightboxImage() {

  if (!currentGallery.length)
    return;

  currentImageIndex++;

  if (
    currentImageIndex >=
    currentGallery.length
  ) {

    currentImageIndex = 0;

  }

  updateLightbox();

}


// =========================================================
// PREVIOUS IMAGE
// =========================================================

function previousLightboxImage() {

  if (!currentGallery.length)
    return;

  currentImageIndex--;

  if (
    currentImageIndex < 0
  ) {

    currentImageIndex =
      currentGallery.length - 1;

  }

  updateLightbox();

}


// =========================================================
// CLOSE LIGHTBOX
// =========================================================

function closeLightbox() {

  if (!projectLightbox)
    return;


  projectLightbox.classList.remove(
    "active"
  );

  projectLightbox.setAttribute(
    "aria-hidden",
    "true"
  );


  if (lightboxImage) {

    lightboxImage.src = "";

  }


  currentGallery = [];

  currentImageIndex = 0;


  /*
    Keep project detail page open.
  */

  const detailPage =
    document.getElementById(
      "projectDetail"
    );


  if (
    !detailPage ||
    !detailPage.classList.contains(
      "active"
    )
  ) {

    document.body.style.overflow =
      "";

  }

}
// =========================================================
// CONTACT FORM
// =========================================================

const contactForm = document.getElementById("contactForm");
const contactSubmit = document.getElementById("contactSubmit");

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!contactSubmit) return;

  const originalText = contactSubmit.textContent;

  contactSubmit.textContent = "Sending...";
  contactSubmit.disabled = true;

  try {
    const formData = new FormData(contactForm);

    const data = Object.fromEntries(formData.entries());

    const response = await fetch(
      "https://formsubmit.co/ajax/dixitbm@rknec.edu",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      }
    );

    const result = await response.json();

    console.log("FormSubmit response:", result);

    if (response.ok && result.success) {
      contactSubmit.textContent = "Message sent ✓";
      contactForm.reset();

      setTimeout(() => {
        contactSubmit.textContent = originalText;
        contactSubmit.disabled = false;
      }, 2500);

    } else {
      throw new Error(result.message || "Submission failed");
    }

  } catch (error) {

    console.error("Contact form error:", error);

    contactSubmit.textContent = "Try again";

    setTimeout(() => {
      contactSubmit.textContent = originalText;
      contactSubmit.disabled = false;
    }, 2500);
  }
});
// =========================================================
// SKILL SEARCH
// =========================================================

const skillSearch =
  document.getElementById("skillSearch");

const skillCards =
  document.querySelectorAll(".skill-card");


skillSearch?.addEventListener(
  "input",
  () => {

    const searchText =
      skillSearch.value
        .toLowerCase()
        .trim();


    skillCards.forEach((card) => {

      const skillName =
        card
          .getAttribute("data-skill")
          ?.toLowerCase() || "";


      if (skillName.includes(searchText)) {

        card.style.display = "";

      } else {

        card.style.display = "none";

      }

    });

  }
);

// =========================================================
// KEYBOARD CONTROLS
// =========================================================

document.addEventListener(
  "keydown",
  (event) => {

    if (
      !projectLightbox ||
      !projectLightbox.classList.contains(
        "active"
      )
    ) {
      return;
    }


    if (
      event.key === "Escape"
    ) {

      closeLightbox();

    }


    if (
      event.key === "ArrowRight"
    ) {

      nextLightboxImage();

    }


    if (
      event.key === "ArrowLeft"
    ) {

      previousLightboxImage();

    }

  }
);


// =========================================================
// INITIALIZE LIGHTBOX
// =========================================================

createProjectLightbox();


// =========================================================
// PROJECT FILTERING
// =========================================================

const filterBtns =
  document.querySelectorAll(
    ".filter-row button"
  );

const projectCards =
  document.querySelectorAll(
    ".proj-card"
  );


filterBtns.forEach((btn) => {

  btn.addEventListener(
    "click",
    () => {

      filterBtns.forEach((b) => {

        b.classList.remove(
          "active"
        );

      });


      btn.classList.add(
        "active"
      );


      const filter =
        btn.getAttribute(
          "data-filter"
        );


      projectCards.forEach(
        (card) => {

          const show =
            filter === "all" ||
            card.getAttribute(
              "data-cat"
            ) === filter;


          card.style.display =
            show ? "" : "none";

        }
      );

    }
  );

});


// =========================================================
// 3D MODEL PICKER
// =========================================================

const mainModel =
  document.getElementById("buildingModel");

const modelPickerBtns =
  document.querySelectorAll(".model-picker button");


modelPickerBtns.forEach((btn) => {

  btn.addEventListener("click", () => {

    modelPickerBtns.forEach((b) => {
      b.classList.remove("active");
    });

    btn.classList.add("active");

    const modelPath =
      btn.getAttribute("data-model");

    if (mainModel && modelPath) {

      console.log("Loading model:", modelPath);

      mainModel.src = modelPath;

      mainModel.setAttribute(
        "auto-rotate",
        ""
      );

    }

  });

});



// =========================================================
// SCREENSHOT LIGHTBOX
// =========================================================

const screenshotLightbox =
  document.getElementById(
    "lightbox"
  );

const lightboxContent =
  document.getElementById(
    "lightboxContent"
  );

const screenshotClose =
  document.querySelector(
    "#lightbox .lightbox-close"
  );


document
  .querySelectorAll(".shot")
  .forEach((shot) => {

    shot.addEventListener(
      "click",
      () => {

        if (lightboxContent) {

          lightboxContent.textContent =
            shot.getAttribute(
              "data-caption"
            ) || "Screenshot";

        }


        screenshotLightbox?.classList.add(
          "open"
        );

      }
    );

  });


screenshotClose?.addEventListener(
  "click",
  () => {

    screenshotLightbox?.classList.remove(
      "open"
    );

  }
);


screenshotLightbox?.addEventListener(
  "click",
  (event) => {

    if (
      event.target ===
      screenshotLightbox
    ) {

      screenshotLightbox.classList.remove(
        "open"
      );

    }

  }
);
// =========================================================
// HERO 3D MODEL
// =========================================================

const heroModel = document.getElementById("heroModel");

if (heroModel) {

  heroModel.addEventListener("load", () => {

    console.log("Hero GLB loaded");

    // Starting camera position
    heroModel.cameraOrbit = "0deg 78deg auto";

    // Force automatic rotation
    heroModel.autoRotate = true;

    // Rotation speed
    heroModel.rotationPerSecond = "10deg";

  });

}

