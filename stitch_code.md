# Under Par Partners website brief

## Design System Strategy: The Precision Executive

## 1. Overview & Creative North Star
**The Creative North Star: "The Digital Architect"**
This design system moves beyond the "SaaS template" by embracing the visual language of high-end editorial archives and architectural blueprints. It rejects the clutter of modern dashboards in favor of **intentional asymmetry** and **tonal depth**.

To achieve a "Minimalist Executive" feel, we prioritize whitespace as a functional element rather than a void. The system breaks the standard rigid grid by utilizing overlapping layers—where text may slightly bleed over a background container—to create a sense of bespoke, hand-crafted precision. The goal is to make the user feel like they are interacting with a private consultancy firm, not a generic software tool.

---

## 2. Colors: Tonal Architecture
The palette is rooted in heritage and stability, modernized through Material Design layering.

### Primary & Secondary Roles
* **Deep Forest Green (Tertiary Container: `#0b3d1d`):** Our anchor. Used for high-trust background sections where "Modern Tech" meets "Executive Legacy."
* **Charcoal Slate (Secondary: `#516169`):** Used for supporting elements and iconography to maintain a professional, neutral grounding.
* **Crisp Gallery White (Surface/Background: `#f8f9fa`):** The canvas. This provides the "Gallery" feel that allows our typography to breathe.
* **Subtle Gold (Primary Fixed: `#fae0a3`):** Reserved exclusively for high-priority CTAs and precision indicators.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders for sectioning are strictly prohibited.
Structure must be defined through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background creates a clear but soft boundary. This removes visual "noise" and enhances the premium feel.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, physical materials.
* **Background (`#f8f9fa`):** The base level.
* **Surface-Container-Low (`#f3f4f5`):** Sub-sections or sidebars.
* **Surface-Container-Lowest (`#ffffff`):** High-priority "Elevated Cards" that need to pop against the gallery white background.

### Signature Textures: The "Glass & Gradient" Rule
To avoid a flat, "out-of-the-box" appearance, floating navigation menus or modular overlays must use **Glassmorphism**.
* **Effect:** Apply `surface` color at 80% opacity with a `20px` backdrop-blur.
* **Gradients:** Use subtle linear gradients transitioning from `primary` (`#291e00`) to `primary-container` (`#423305`) for hero backgrounds to add "visual soul" and depth.

---

## 3. Typography: The Editorial Balance
The contrast between Serif (Legacy) and Sans-Serif (Innovation) is the heartbeat of this system.

* **Display & Headlines (Newsreader):** Use for all major headers. The Serif font conveys authority, empathy, and the "Under Par" commitment to precision.
* *Scale Example:* `display-lg` (3.5rem) should be used with wide tracking (-0.02em) for a cinematic, editorial impact.
* **Titles & Body (Manrope):** A clean, geometric Sans-Serif that represents the "AI and Automation" side of the consultancy.
* *Scale Example:* `body-lg` (1rem) with a generous line-height (1.6) ensures readability and a relaxed, executive pace.
* **Labels (Manrope):** All-caps labels with `0.05em` letter spacing should be used for secondary metadata to mimic architectural annotations.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to create "pop"; we use light and tone to create "presence."

* **The Layering Principle:** Place a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#f3f4f5) section. This creates a natural, soft lift that feels integrated into the page.
* **Ambient Shadows:** If a floating element (like a modal) is required, use an extra-diffused shadow: `0 20px 40px rgba(25, 28, 29, 0.05)`. The shadow must be almost imperceptible.
* **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use the `outline-variant` (`#c1c9be`) at **15% opacity**. This provides a "hint" of a line without cutting the layout.

---

## 5. Components: Precision Primitives

### Buttons
* **Primary:** Background: `primary_fixed` (#fae0a3), Text: `on_primary_fixed` (#241a00). Shape: `md` (0.375rem).
* **Secondary (Sage-hint):** Background: `tertiary_fixed_dim` (#9fd3a6), Text: `on_tertiary_fixed` (#00210b).
* **Tertiary:** Ghost style. No background. `label-md` typography in `secondary` color.

### Cards & Lists
* **Rule:** Forbid divider lines.
* **Execution:** Separate list items using `spacing-4` (1.4rem) of vertical white space. For cards, use a slight shift in background color (e.g., `surface-container-highest`) on hover to indicate interactivity.

### Input Fields
* **Style:** Minimalist underline or soft-filled. Background: `surface-container-high`.
* **Focus State:** Transition the background to `surface-container-highest` and change the bottom "Ghost Border" to `primary` (#291e00).

### Bespoke Component: The "Precision Metric"
A specialized component for an AI consultancy. A large `display-sm` Serif number paired with a small `label-sm` Manrope description, encased in a `surface-container-lowest` card with a `tertiary` (#00260d) accent bar (2px) on the left side only.

---

## 6. Do's and Don'ts

### Do:
* **Do** use asymmetrical layouts. Place a headline on the left with the body copy shifted to the right grid columns.
* **Do** use the `24` (8.5rem) spacing token for hero section padding to emphasize the "Executive" breathing room.
* **Do** use Newsreader Serif for any text that is meant to sound "Human" or "Expert."

### Don't:
* **Don't** use 100% black. Use `on_surface` (#191c1d) for text to maintain a softer, high-end feel.
* **Don't** use literal golf icons (clubs, balls, flags). Use metaphors: vectors representing "paths," "trajectories," or "alignment."
* **Don't** use standard `lg` (0.5rem) roundedness for everything. Use `none` or `sm` for a sharper, more professional "architectural" edge.

## Home page sample code from Stitch
```
<!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&amp;family=Manrope:wght@200..800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "on-error": "#ffffff",
              "on-secondary-container": "#55656d",
              "inverse-on-surface": "#f0f1f2",
              "surface-bright": "#f8f9fa",
              "on-primary-container": "#b29b64",
              "surface-container-high": "#e7e8e9",
              "tertiary": "#00260d",
              "surface-variant": "#e1e3e4",
              "outline": "#717970",
              "on-surface-variant": "#414941",
              "on-secondary": "#ffffff",
              "surface-dim": "#d9dadb",
              "on-tertiary-container": "#77a97f",
              "on-primary-fixed-variant": "#564516",
              "secondary-container": "#d2e2ec",
              "on-secondary-fixed-variant": "#3a4951",
              "surface-container-highest": "#e1e3e4",
              "on-primary": "#ffffff",
              "inverse-primary": "#ddc48a",
              "surface-tint": "#6f5c2c",
              "surface-container": "#edeeef",
              "tertiary-fixed-dim": "#9fd3a6",
              "on-surface": "#191c1d",
              "surface-container-lowest": "#ffffff",
              "surface": "#f8f9fa",
              "background": "#f8f9fa",
              "primary-fixed-dim": "#ddc48a",
              "on-error-container": "#93000a",
              "outline-variant": "#c1c9be",
              "primary-container": "#423305",
              "error": "#ba1a1a",
              "surface-container-low": "#f3f4f5",
              "tertiary-container": "#0b3d1d",
              "on-tertiary-fixed": "#00210b",
              "tertiary-fixed": "#bbefc1",
              "on-secondary-fixed": "#0e1d25",
              "on-primary-fixed": "#241a00",
              "secondary-fixed-dim": "#b9c9d3",
              "primary-fixed": "#fae0a3",
              "on-tertiary-fixed-variant": "#21502e",
              "secondary": "#516169",
              "primary": "#291e00",
              "error-container": "#ffdad6",
              "on-tertiary": "#ffffff",
              "secondary-fixed": "#d5e5ef",
              "on-background": "#191c1d",
              "inverse-surface": "#2e3132",
              "deep-forest": "#0B3D1D",
              "gallery-white": "#F8F9FA"
            },
            fontFamily: {
              "headline": ["Newsreader", "serif"],
              "body": ["Manrope", "sans-serif"],
              "label": ["Manrope", "sans-serif"]
            },
            borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .serif-italic { font-family: 'Newsreader', serif; font-style: italic; }
    </style>
</head>
<body class="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
<!-- Top Navigation Bar -->
<header class="bg-gallery-white/80 backdrop-blur-md sticky top-0 z-50 w-full border-b border-deep-forest/5">
<nav class="flex justify-between items-center w-full px-12 py-6 max-w-screen-2xl mx-auto">
<div class="flex items-center gap-2 text-2xl font-serif italic tracking-tighter text-deep-forest">
<span class="material-symbols-outlined text-deep-forest" data-icon="insights">insights</span>
            Under Par Partners
        </div>
<div class="hidden md:flex items-center gap-12">
<a class="text-deep-forest font-bold border-b-2 border-primary-fixed pb-1 font-body tracking-tight hover:opacity-80 transition-opacity duration-300" href="#">Services</a>
<a class="text-secondary hover:text-deep-forest transition-colors font-body tracking-tight hover:opacity-80 transition-opacity duration-300" href="#">Methodology</a>
<a class="text-secondary hover:text-deep-forest transition-colors font-body tracking-tight hover:opacity-80 transition-opacity duration-300" href="#">The Partners</a>
</div>
<button class="bg-deep-forest text-white px-8 py-2.5 font-label uppercase tracking-[0.05em] text-xs font-bold rounded-sm hover:opacity-90 transition-all active:scale-95 duration-200">
            Inquire
        </button>
</nav>
</header>
<main>
<!-- Hero Section -->
<section class="relative min-h-[921px] flex items-center px-12 py-24 max-w-screen-2xl mx-auto overflow-hidden bg-gallery-white">
<div class="grid grid-cols-12 w-full gap-8 items-center">
<div class="col-span-12 md:col-span-7 z-10">
<span class="font-label uppercase tracking-[0.3em] text-[10px] text-deep-forest mb-6 block font-bold border-l-2 border-deep-forest pl-4">Executive Automation Consultancy</span>
<h1 class="font-headline text-6xl md:text-8xl text-deep-forest leading-[0.95] tracking-tight mb-8">
                    You <span class="serif-italic">weren't</span> meant to do the computer's job.
                </h1>
<p class="font-body text-xl text-secondary max-w-xl leading-relaxed mb-12">
                    Under Par Partners streamlines your operations with AI and automation, turning manual chaos into effortless efficiency.
                </p>
<div class="flex items-center gap-6">
<button class="bg-deep-forest text-white px-10 py-4 font-label uppercase tracking-[0.1em] text-sm font-bold rounded-sm shadow-sm hover:opacity-90 transition-all">
                        Find a Better Way
                    </button>
<div class="w-24 h-px bg-deep-forest/20"></div>
<span class="font-label text-xs uppercase tracking-widest text-deep-forest/60">Efficiency First</span>
</div>
</div>
<div class="col-span-12 md:col-span-5 relative">
<div class="aspect-[4/5] bg-surface-container-low relative overflow-hidden rounded-sm">
<img alt="Architectural precision" class="w-full h-full object-cover grayscale opacity-90 contrast-125" data-alt="Modern architectural building facade with clean diagonal lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSY0rkUIJB4F1oK1wQWrWEjSKk0Qh7DLuQAHHtL2VoYifCIV1FbKFZOiwYUr7-BaZtFRfsZ8CqZHmYWalTxF6LyU4AWXtpitfV-X7bEOaAt5ARcwbWAbsabqOVJkMgWQskKUMOEB_IXejC8BHpAvqfJjY2Y69vpBlY6Gs20SpSCv4FzaxwifwhzAkh57TuefJAxcMfaTn7GNYlTh1-ltWMnySdCBAolAedNdf6cy1Gm8RlPMYfwf4lP9UkJFgsO_RvPEMzviB-E-0K"/>
<div class="absolute inset-0 bg-gradient-to-t from-deep-forest/40 to-transparent"></div>
</div>
<!-- Absolute Precision Graphic -->
<div class="absolute -bottom-12 -left-12 p-8 bg-white border border-deep-forest/5 shadow-xl max-w-xs hidden md:block">
<div class="border-l-4 border-deep-forest pl-4">
<span class="font-headline text-4xl text-deep-forest italic block mb-2">99.8%</span>
<p class="font-label text-[10px] uppercase tracking-widest text-secondary">Operational accuracy goal for every implementation.</p>
</div>
</div>
</div>
</div>
</section>
<!-- Pain Point Section -->
<section class="bg-deep-forest py-32 px-12 text-gallery-white">
<div class="max-w-screen-2xl mx-auto">
<div class="mb-24 flex flex-col md:flex-row justify-between items-baseline gap-8">
<h2 class="font-headline text-5xl text-gallery-white max-w-lg leading-tight">
                    "There has to be a <span class="serif-italic">better way</span>."
                </h2>
<p class="font-body text-lg text-gallery-white/70 max-w-md">
                    Relief begins the moment manual friction disappears. We identify the silent bottlenecks draining your executive focus.
                </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/10">
<div class="bg-white/5 p-12 transition-all hover:bg-white/10 group border-l border-white/10">
<span class="material-symbols-outlined text-4xl text-primary-fixed mb-8 group-hover:scale-110 transition-transform" data-icon="keyboard">keyboard</span>
<span class="font-label text-[10px] text-white/50 block mb-4 uppercase tracking-widest">01 — Obsolete Workflows</span>
<h3 class="font-headline text-2xl text-gallery-white mb-4">Manual Data Entry</h3>
<p class="font-body text-gallery-white/70 leading-relaxed">
                        Hours lost to repetitive keystrokes and human error. We replace the labor with liquid logic.
                    </p>
</div>
<div class="bg-white/5 p-12 transition-all hover:bg-white/10 group border-l border-white/10">
<span class="material-symbols-outlined text-4xl text-primary-fixed mb-8 group-hover:scale-110 transition-transform" data-icon="description">description</span>
<span class="font-label text-[10px] text-white/50 block mb-4 uppercase tracking-widest">02 — Analog Friction</span>
<h3 class="font-headline text-2xl text-gallery-white mb-4">Paper-Heavy Processes</h3>
<p class="font-body text-gallery-white/70 leading-relaxed">
                        Physical friction in a digital world. We digitize the workflow, maintaining the signature precision.
                    </p>
</div>
<div class="bg-white/5 p-12 transition-all hover:bg-white/10 group border-l border-white/10">
<span class="material-symbols-outlined text-4xl text-primary-fixed mb-8 group-hover:scale-110 transition-transform" data-icon="account_tree">account_tree</span>
<span class="font-label text-[10px] text-white/50 block mb-4 uppercase tracking-widest">03 — Tech Silos</span>
<h3 class="font-headline text-2xl text-gallery-white mb-4">Fragmented Systems</h3>
<p class="font-body text-gallery-white/70 leading-relaxed">
                        Software that doesn't speak to each other. We build the bridges that unify your data ecosystem.
                    </p>
</div>
</div>
</div>
</section>
<!-- Services Section -->
<section class="py-32 px-12 max-w-screen-2xl mx-auto bg-gallery-white">
<div class="flex flex-col items-center text-center mb-24">
<span class="font-label text-xs uppercase tracking-[0.2em] text-deep-forest font-bold mb-4">Our Expertise</span>
<h2 class="font-headline text-5xl text-deep-forest">The Architecture of <span class="serif-italic">Efficiency</span></h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
<!-- Service 01 -->
<div class="flex flex-col gap-6">
<div class="flex items-center gap-4">
<span class="font-headline text-sm italic text-deep-forest">01</span>
<span class="material-symbols-outlined text-deep-forest text-2xl" data-icon="troubleshoot">troubleshoot</span>
</div>
<h3 class="font-headline text-3xl text-deep-forest">Operational Audits</h3>
<p class="font-body text-secondary leading-relaxed mb-6">
                    A forensic deep-dive into your current workflows to identify hidden leakages and automation potential.
                </p>
<div class="aspect-square bg-surface-container-high overflow-hidden rounded-sm">
<img alt="Data visualization audit" class="w-full h-full object-cover grayscale brightness-90 contrast-125" data-alt="Abstract blue and white glowing data lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4pYFJt_qfiWlmPf57HuJ9ObkV001VsCDWgNsMrOYEZdS1IALokeksy8Y8F5UI6S9YKWOmAePhlUwML-I-C_jlbV60hVtaHENNl5o2DV9T1uRb91V0-hJkZ_Mw9nF-DVpjYbgUPOodJzqddeqK8qioK79NEMGfiGj9EkBUdeJq8gKParfHvI6uRMMX2Gngzx1E5pEu_ZLMvWOYAI_g-1gmg8QU97uY1Evc2MyCj_DxWG-EInYdKsijDJTYiW0XxHirQ0pN2Ox0yaD4"/>
</div>
</div>
<!-- Service 02 -->
<div class="flex flex-col gap-6 bg-deep-forest p-12 rounded-sm text-gallery-white">
<div class="flex items-center gap-4">
<span class="font-headline text-sm italic text-primary-fixed">02</span>
<span class="material-symbols-outlined text-gallery-white/80 text-2xl" data-icon="psychology">psychology</span>
</div>
<h3 class="font-headline text-3xl text-gallery-white">Custom AI Implementation</h3>
<p class="font-body text-gallery-white/70 leading-relaxed mb-6">
                    Bespoke AI tools designed specifically for your operational DNA. No generic templates, only precision.
                </p>
<div class="aspect-square bg-white/10 overflow-hidden rounded-sm">
<img alt="Microchip precision" class="w-full h-full object-cover grayscale brightness-110 contrast-125 mix-blend-screen" data-alt="Macro photo of intricate computer motherboard circuits" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8MivBzf36W_XEsl7BlIqO7vja0TSEZeVgKQ5TqKEaaUOpTfAA8ptK1y_kSlOEpgQkXQGh--d7DSfSLKsBmSHTxgDhRgDVxrQI1pUR22cN624Jpe_6aNdIeOHoAdbYyeCmIqfJCFrKCYV3RJOAKMPMPUK3y7Q676-I5gBpBLH-hg4VT9shfwuqZ1tJWGiNO9ZYfCk33u20yG2FVwl7VcDHSI6gqEITB9JZRWZ1oiDtPjW4ZrzcxveUQHo5EQPuqoxvQedR57nL-gzx"/>
</div>
</div>
<!-- Service 03 -->
<div class="flex flex-col gap-6">
<div class="flex items-center gap-4">
<span class="font-headline text-sm italic text-deep-forest">03</span>
<span class="material-symbols-outlined text-deep-forest text-2xl" data-icon="integration_instructions">integration_instructions</span>
</div>
<h3 class="font-headline text-3xl text-deep-forest">Legacy Systems Integration</h3>
<p class="font-body text-secondary leading-relaxed mb-6">
                    We don't replace your history; we empower it. Unifying 20-year-old reliability with modern automation.
                </p>
<div class="aspect-square bg-surface-container-high overflow-hidden rounded-sm">
<img alt="Technical bridge" class="w-full h-full object-cover grayscale brightness-90 contrast-125" data-alt="Industrial steel structure with geometric symmetry" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKSo9QaR2ARLbAJA4sV_dcqnHV9qh_nE1OtE1mVbuRA209T5iVvTjHPVAja1ZDltMu9x-0WZxyB-aD1PzvuLkv7n0YP2WG2HFZ-IJQveYiO6RfVWoDVQirKMOUAUbU3Wtdt_7-boDRP_VKF9lnBdzcpmQBPQYLiil98tbsn691wKhmVzOKwBfetqptKQfFgC-mDuqMz7MnT_-iRuBo1u6_Z46B-Fl9GxECFIYMO_e-8GyNGM2Xy9TtnpcBay-jCmmF57WhaNayyo2-"/>
</div>
</div>
</div>
</section>
<!-- The Partners Section -->
<section class="bg-surface-container-highest py-32 px-12">
<div class="max-w-screen-2xl mx-auto">
<div class="grid grid-cols-12 gap-16 items-center">
<div class="col-span-12 md:col-span-5 order-2 md:order-1 relative">
<div class="grid grid-cols-2 gap-4">
<div class="aspect-[3/4] bg-secondary overflow-hidden rounded-sm">
<img alt="Partner One" class="w-full h-full object-cover grayscale" data-alt="Professional portrait of a male executive in charcoal suit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8s1Rqq9jycKLf495oXY70YqN2DtiNmpb0JKlEnOpoKMN_t6la7LJ-xwKVtAnIObnPaLI4D7voGPlIUpRpMawg6XYQooULlxmhCYTm9YMOduXTObukahoDHc1Cu_eUzrOzZuUmaIKKOPtQ2HtnmDTJbGU0pjRw19frDIxvFQleD3kBHRepKDVS9tIHQTn2M2QtbqXLwsDPNq8pFw67mAVTvEPfneBtfRHPOIe-4AitN-E2bM5NvZSSHCZQAvGsvVHrQq0cZqX-u2Os"/>
</div>
<div class="aspect-[3/4] bg-secondary overflow-hidden mt-12 rounded-sm">
<img alt="Partner Two" class="w-full h-full object-cover grayscale" data-alt="Professional portrait of a female executive in dark blazer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAMfp7Rp4cwwUD7mVnscrPct3ElYtt3wfu3U9v8R_1RixWROFMmAvv020dm08BXAW6U9C7QZTuomxCxE7xNVf_ZxoNBrcWluKiKeGf1Boy80rjm1Fas2ZUZeeiO2utGD4pJMlKJ-i3YgtM8zjYTByxihsMATxJ3vqK_dtmYQzxerPEeiRUIAypMKlrFYfvrzUvGMU6Yq0LB7pOGnoqZgVMNdFycT6B6XBRExwt61DcHO81zm8P8icPVAXY1B339BUgdIDyV9JAGPEq"/>
</div>
</div>
<div class="absolute inset-0 border-[20px] border-deep-forest/5 -m-10 -z-10"></div>
</div>
<div class="col-span-12 md:col-span-7 order-1 md:order-2">
<span class="font-label text-xs uppercase tracking-[0.2em] text-deep-forest font-bold mb-6 block">The Visionaries</span>
<h2 class="font-headline text-5xl text-deep-forest mb-8">
                        The <span class="serif-italic">Partners</span>
</h2>
<div class="flex flex-col gap-8 max-w-xl">
<div class="border-l-2 border-deep-forest pl-8 py-2">
<p class="font-body text-lg text-secondary leading-relaxed italic">
                                "As avid golfers, we are obsessed with precision. On the green, a fraction of an inch is the difference between success and failure. We bring that same 'Under Par' mentality to every automation project."
                            </p>
</div>
<p class="font-body text-on-surface leading-relaxed">
                            Our founders spent decades in traditional operational roles before mastering AI. We speak the language of business first, and the language of code second. This duality ensures that every technical solution has a measurable business impact.
                        </p>
<div class="space-y-4 pt-4">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-deep-forest" data-icon="check_circle">check_circle</span>
<span class="font-bold text-xs uppercase tracking-widest text-deep-forest">Expert Curation: 20+ Years Experience</span>
</div>
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-deep-forest" data-icon="check_circle">check_circle</span>
<span class="font-bold text-xs uppercase tracking-widest text-deep-forest">Precision Mindset: Meticulous Attention</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Contact/CTA Section -->
<section class="bg-deep-forest py-32 px-12 relative overflow-hidden">
<div class="absolute inset-0 opacity-10 pointer-events-none">
<div class="absolute top-0 right-0 w-96 h-96 border-t border-r border-white/20 transform -translate-y-1/2 translate-x-1/2"></div>
<div class="absolute bottom-0 left-0 w-64 h-64 border-b border-l border-white/20 transform translate-y-1/2 -translate-x-1/2"></div>
<div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.05),transparent_50%)]"></div>
</div>
<div class="max-w-4xl mx-auto relative z-10 text-center mb-16">
<h2 class="font-headline text-5xl text-gallery-white mb-6">Ready to reclaim your <span class="serif-italic text-primary-fixed">executive capital?</span></h2>
<p class="font-body text-gallery-white/70 text-lg max-w-2xl mx-auto">
                Ready to trade manual chaos for effortless efficiency? Let's discuss a roadmap for your digital transformation.
            </p>
</div>
<div class="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl p-12 shadow-2xl border border-white/10 rounded-sm">
<form class="flex flex-col gap-8">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="flex flex-col gap-2">
<label class="font-label text-[10px] uppercase tracking-widest text-white/50">Full Name</label>
<input class="border-b border-white/20 bg-transparent py-2 px-0 focus:ring-0 focus:border-primary-fixed outline-none font-body text-gallery-white" placeholder="Johnathan Doe" type="text"/>
</div>
<div class="flex flex-col gap-2">
<label class="font-label text-[10px] uppercase tracking-widest text-white/50">Work Email</label>
<input class="border-b border-white/20 bg-transparent py-2 px-0 focus:ring-0 focus:border-primary-fixed outline-none font-body text-gallery-white" placeholder="j.doe@enterprise.com" type="email"/>
</div>
</div>
<div class="flex flex-col gap-2">
<label class="font-label text-[10px] uppercase tracking-widest text-white/50">Primary Operational Pain Point</label>
<select class="border-b border-white/20 bg-transparent py-2 px-0 focus:ring-0 focus:border-primary-fixed outline-none font-body text-gallery-white">
<option class="bg-deep-forest">Manual Data Entry</option>
<option class="bg-deep-forest">Legacy System Connectivity</option>
<option class="bg-deep-forest">Document Processing</option>
<option class="bg-deep-forest">Workflow Orchestration</option>
</select>
</div>
<div class="flex flex-col gap-2">
<label class="font-label text-[10px] uppercase tracking-widest text-white/50">Additional Context (Optional)</label>
<textarea class="border border-white/10 bg-white/5 p-4 focus:ring-1 focus:ring-primary-fixed outline-none font-body text-gallery-white" placeholder="How can we help streamline your specific workflow?" rows="4"></textarea>
</div>
<button class="bg-primary-fixed text-deep-forest py-5 font-label uppercase tracking-widest text-sm font-bold mt-4 hover:bg-white transition-colors focus:ring-1 focus:ring-white">
                    Find a Better Way
                </button>
</form>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-deep-forest border-t border-white/5">
<div class="flex flex-col md:flex-row justify-between items-center w-full px-12 py-16 max-w-screen-2xl mx-auto gap-8">
<div class="flex flex-col gap-4 items-center md:items-start text-gallery-white">
<div class="text-lg font-serif italic text-primary-fixed">Under Par Partners</div>
<p class="text-xs font-sans uppercase tracking-[0.05em] text-gallery-white/40">© 2024 Under Par Partners. Precision in Automation.</p>
</div>
<div class="flex flex-wrap justify-center gap-10">
<a class="text-xs font-sans uppercase tracking-[0.05em] text-gallery-white/40 hover:text-primary-fixed transition-colors" href="#">Services</a>
<a class="text-xs font-sans uppercase tracking-[0.05em] text-gallery-white/40 hover:text-primary-fixed transition-colors" href="#">Methodology</a>
<a class="text-xs font-sans uppercase tracking-[0.05em] text-gallery-white/40 hover:text-primary-fixed transition-colors" href="#">The Partners</a>
<a class="text-xs font-sans uppercase tracking-[0.05em] text-gallery-white/40 hover:text-primary-fixed transition-colors" href="#">Privacy Policy</a>
<a class="text-xs font-sans uppercase tracking-[0.05em] text-gallery-white/40 hover:text-primary-fixed transition-colors" href="#">Terms of Service</a>
</div>
<div class="flex gap-4">
<a class="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-primary-fixed hover:bg-primary-fixed hover:text-deep-forest transition-all" href="#">
<span class="material-symbols-outlined" data-icon="share">share</span>
</a>
<a class="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-primary-fixed hover:bg-primary-fixed hover:text-deep-forest transition-all" href="#">
<span class="material-symbols-outlined" data-icon="mail">mail</span>
</a>
</div>
</div>
</footer>
</body></html>
```