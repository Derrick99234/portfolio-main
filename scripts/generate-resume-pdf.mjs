import fs from "node:fs";
import path from "node:path";
import React from "react";
import ReactPDF, {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

const projectRoot = process.cwd();
const portfolioPath = path.join(projectRoot, "src", "data", "portfolio.json");
const portfolio = JSON.parse(fs.readFileSync(portfolioPath, "utf8"));

const profile = portfolio.profile;
const summary = portfolio.resumeSummary;
const experience = portfolio.experience;
const projects = portfolio.projects;

const uniq = (items) => Array.from(new Set(items.filter(Boolean).map(String)));
const languages = uniq(["JavaScript", "TypeScript", "Python"]);

const webSkills = uniq([
  ...(portfolio.skills.frontend || []),
  ...(portfolio.skills.backend || []),
]).filter((s) => !languages.some((l) => l.toLowerCase() === s.toLowerCase()));

const skills = {
  "Programming Languages": languages,
  "Web Development": webSkills.slice(0, 14),
  "Mobile Development": (portfolio.skills.mobile || []).slice(0, 6),
  Tools: (portfolio.skills.tools || []).slice(0, 10),
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 38,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#0f172a",
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 12,
  },
  nameRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: -0.2,
  },
  title: {
    marginTop: 6,
    fontSize: 10.5,
    color: "#334155",
    fontWeight: 600,
  },
  contactRow: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    color: "#334155",
  },
  contactItem: {
    fontSize: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#e2e8f0",
    marginTop: 12,
  },
  grid: {
    marginTop: 12,
    display: "flex",
    flexDirection: "row",
    gap: 14,
  },
  leftCol: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rightCol: {
    width: 180,
    flexShrink: 0,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 11.5,
    fontWeight: 700,
    letterSpacing: 0.2,
    marginBottom: 8,
    color: "#0f172a",
    textTransform: "uppercase",
  },
  paragraph: {
    fontSize: 10,
    lineHeight: 1.42,
    color: "#334155",
    marginBottom: 5,
  },
  jobHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  jobRole: {
    fontSize: 11,
    fontWeight: 700,
    color: "#0f172a",
  },
  jobMeta: {
    marginTop: 2,
    fontSize: 10,
    color: "#334155",
  },
  jobDates: {
    fontSize: 10,
    color: "#334155",
    fontWeight: 600,
  },
  bullets: {
    marginTop: 5,
  },
  bulletRow: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    marginBottom: 3,
  },
  bulletDot: {
    marginTop: 3.5,
    width: 6,
    fontSize: 11,
    color: "#64748b",
  },
  bulletText: {
    flexGrow: 1,
    fontSize: 9.6,
    lineHeight: 1.35,
    color: "#334155",
  },
  skillGroup: {
    marginBottom: 8,
  },
  skillLabel: {
    fontSize: 10,
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: 3,
  },
  skillText: {
    fontSize: 10,
    lineHeight: 1.35,
    color: "#334155",
  },
  link: {
    color: "#0f172a",
    textDecoration: "none",
  },
});

const e = React.createElement;

function ResumeDocument() {
  const onePageExperience = (experience || []).slice(0, 3);
  const onePageProjects = (projects || []).slice(0, 2);

  return e(
    Document,
    null,
    e(
      Page,
      { size: "A4", style: styles.page },
      e(
        View,
        { style: styles.header },
        e(
          View,
          { style: styles.nameRow },
          e(Text, { style: styles.name }, profile.name),
          e(Text, { style: styles.jobDates }, profile.location)
        ),
        e(Text, { style: styles.title }, profile.title),
        e(
          View,
          { style: styles.contactRow },
          e(Text, { style: styles.contactItem }, profile.email),
          e(Text, { style: styles.contactItem }, profile.phone),
          e(
            Link,
            { src: profile.links.linkedin, style: [styles.contactItem, styles.link] },
            "LinkedIn"
          ),
          e(
            Link,
            { src: profile.links.github, style: [styles.contactItem, styles.link] },
            "GitHub"
          ),
          e(Link, { src: profile.links.x, style: [styles.contactItem, styles.link] }, "X")
        ),
        e(View, { style: styles.divider })
      ),
      e(
        View,
        { style: styles.grid },
        e(
          View,
          { style: styles.leftCol },
          e(
            View,
            { style: styles.section },
            e(Text, { style: styles.sectionTitle }, "Summary"),
            ...summary
              .slice(0, 2)
              .map((p) => e(Text, { key: p, style: styles.paragraph }, p))
          ),
          e(
            View,
            { style: styles.section },
            e(Text, { style: styles.sectionTitle }, "Experience"),
            ...onePageExperience.map((job) =>
              e(
                View,
                { key: `${job.company}-${job.dates}`, style: { marginBottom: 10 } },
                e(
                  View,
                  { style: styles.jobHeader },
                  e(
                    View,
                    null,
                    e(Text, { style: styles.jobRole }, job.role),
                    e(
                      Text,
                      { style: styles.jobMeta },
                      `${job.company} • ${job.location}`
                    )
                  ),
                  e(Text, { style: styles.jobDates }, job.dates)
                ),
                e(
                  View,
                  { style: styles.bullets },
                  ...job.highlights.slice(0, 3).map((h) =>
                    e(
                      View,
                      { key: h, style: styles.bulletRow },
                      e(Text, { style: styles.bulletDot }, "•"),
                      e(Text, { style: styles.bulletText }, h)
                    )
                  )
                )
              )
            )
          )
        ),
        e(
          View,
          { style: styles.rightCol },
          e(Text, { style: styles.sectionTitle }, "Skills"),
          ...Object.entries(skills).map(([group, items]) =>
            e(
              View,
              { key: group, style: styles.skillGroup },
              e(Text, { style: styles.skillLabel }, group),
              e(Text, { style: styles.skillText }, items.join(", "))
            )
          ),
          e(Text, { style: [styles.sectionTitle, { marginTop: 10 }] }, "Projects"),
          ...onePageProjects.map((p) =>
            e(
              View,
              { key: p.title, style: { marginBottom: 6 } },
              e(Text, { style: { fontSize: 10, fontWeight: 700 } }, p.title),
              e(
                Text,
                { style: { fontSize: 9.6, color: "#334155", marginTop: 2, lineHeight: 1.25 } },
                (p.tags || []).slice(0, 4).join(" • ")
              )
            )
          )
        )
      )
    )
  );
}

const outPath = path.join(projectRoot, "public", "OLATUNBOSUN_RESUME.pdf");

await ReactPDF.render(e(ResumeDocument, null), outPath);

const stats = fs.statSync(outPath);
process.stdout.write(`Generated: ${outPath} (${stats.size} bytes)\n`);
