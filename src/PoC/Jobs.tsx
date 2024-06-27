import { useState } from "react";

import Button from "../components/Button/Button";
import TextInput from "../components/form/TextInput/TextInput";
import Card from "../components/layout/Card";
import Flex from "../components/layout/Flex";
import Grid from "../components/layout/Grid";
import GridItem from "../components/layout/GridItem";
import Stack from "../components/layout/Stack";
import Paragraph from "../components/text/Paragraph/Paragraph";
import Heading from "../components/text/Heading/Heading";
import Badge from "../components/Badge/Badge";
import List from "../components/text/List/List";

type Props = {
};

const jobsData = [
  {
    title: 'Senior Frontend Engineer',
    location: 'Remote',
    type: 'Full-Time',
    description: 'We are looking for a Senior Frontend Engineer to join our team. You will be responsible for developing and maintaining our web applications. You will work closely with our product team to deliver high-quality software.',
    responsibilities: [
      'Develop and maintain our web applications',
      'Work closely with our product team to deliver high-quality software',
    ],
    qualifications: [
      '5+ years of experience in frontend development',
      'Experience with React',
      'Experience with TypeScript',
    ],
    applyUrl: 'https://example.com',
  },
  {
    title: 'Senior Backend Engineer',
    location: 'Remote',
    type: 'Full-Time',
    description: 'We are looking for a Senior Backend Engineer to join our team. You will be responsible for developing and maintaining our backend services. You will work closely with our product team to deliver high-quality software.',
    responsibilities: [
      'Develop and maintain our backend services',
      'Work closely with our product team to deliver high-quality software',
    ],
    qualifications: [
      '5+ years of experience in backend development',
      'Experience with Node.js',
      'Experience with PostgreSQL',
    ],
    applyUrl: 'https://example.com',
  },
  {
    title: 'Senior Fullstack Engineer',
    location: 'Remote',
    type: 'Full-Time',
    description: 'We are looking for a Senior Fullstack Engineer to join our team. You will be responsible for developing and maintaining our web applications and backend services. You will work closely with our product team to deliver high-quality software.',
    responsibilities: [
      'Develop and maintain our web applications and backend services',
      'Work closely with our product team to deliver high-quality software',
    ],
    qualifications: [
      '5+ years of experience in fullstack development',
      'Experience with React',
      'Experience with Node.js',
      'Experience with PostgreSQL',
    ],
    applyUrl: 'https://example.com',
  },
  {
    title: 'Senior DevOps Engineer',
    location: 'Remote',
    type: 'Full-Time',
    description: 'We are looking for a Senior DevOps Engineer to join our team. You will be responsible for developing and maintaining our infrastructure. You will work closely with our product team to deliver high-quality software.',
    responsibilities: [
      'Develop and maintain our infrastructure',
      'Work closely with our product team to deliver high-quality software',
    ],
    qualifications: [
      '5+ years of experience in DevOps',
      'Experience with AWS',
      'Experience with Terraform',
    ],
    applyUrl: 'https://example.com',
  },
  {
    title: 'Senior Product Manager',
    location: 'Remote',
    type: 'Full-Time',
    description: 'We are looking for a Senior Product Manager to join our team. You will be responsible for managing our product roadmap. You will work closely with our engineering team to deliver high-quality software.',
    responsibilities: [
      'Manage our product roadmap',
      'Work closely with our engineering team to deliver high-quality software',
    ],
    qualifications: [
      '5+ years of experience in product management',
      'Experience with Agile',
      'Experience with JIRA',
    ],
    applyUrl: 'https://example.com',
  },
  {
    title: 'Senior UX Designer',
    location: 'Remote',
    type: 'Full-Time',
    description: 'We are looking for a Senior UX Designer to join our team. You will be responsible for designing our user interfaces. You will work closely with our product team to deliver high-quality software.',
    responsibilities: [
      'Design our user interfaces',
      'Work closely with our product team to deliver high-quality software',
    ],
    qualifications: [
      '5+ years of experience in UX design',
      'Experience with Figma',
      'Experience with InVision',
    ],
    applyUrl: 'https://example.com',
  },
  {
    title: 'Senior UI Developer',
    location: 'Remote',
    type: 'Full-Time',
    description: 'We are looking for a Senior UI Developer to join our team. You will be responsible for developing our user interfaces. You will work closely with our product team to deliver high-quality software.',
    responsibilities: [
      'Develop our user interfaces',
      'Work closely with our product team to deliver high-quality software',
    ],
    qualifications: [
      '5+ years of experience in UI development',
      'Experience with React',
      'Experience with TypeScript',
    ],
    applyUrl: 'https://example.com',
  },
  {
    title: 'Senior QA Engineer',
    location: 'Remote',
    type: 'Full-Time',
    description: 'We are looking for a Senior QA Engineer to join our team. You will be responsible for testing our software. You will work closely with our product team to deliver high-quality software.',
    responsibilities: [
      'Test our software',
      'Work closely with our product team to deliver high-quality software',
    ],
    qualifications: [
      '5+ years of experience in QA',
      'Experience with Selenium',
      'Experience with Cypress',
    ],
    applyUrl: 'https://example.com',
  },
  {
    title: 'Senior Data Scientist',
    location: 'Remote',
    type: 'Full-Time',
    description: 'We are looking for a Senior Data Scientist to join our team. You will be responsible for analyzing our data. You will work closely with our product team to deliver high-quality software.',
    responsibilities: [
      'Analyze our data',
      'Work closely with our product team to deliver high-quality software',
    ],
    qualifications: [
      '5+ years of experience in data science',
      'Experience with Python',
      'Experience with pandas',
    ],
    applyUrl: 'https://example.com',
  },
];

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(jobsData[0]);

  return (
    <Flex>
      <Grid columns="2" gap="4">
        <GridItem>
          <Card paddingTop="32" paddingBottom="32" paddingLeft="12" paddingRight="12" fullWidth>
            <Stack direction="vertical" gap="16">
              <Heading as="h1" size="h1">Jobs</Heading>

              {jobsData.map((job, index) => (
                <Card key={index} paddingTop="16" paddingBottom="16" paddingLeft="12" paddingRight="12">
                  <Stack direction="vertical" gap="8">
                    <Heading as="h2" size="h2">{job.title}</Heading>

                    <Flex gap="4">
                      <Badge type="inverse" label={job.location} />
                      <Badge type="inverse" label={job.type} />
                    </Flex>

                    <Paragraph>{job.description}</Paragraph>
                    <Heading as="h3" size="h3">Responsibilities</Heading>
                    <List items={job.responsibilities} />
                    <Heading as="h3" size="h3">Qualifications</Heading>
                    <List items={job.qualifications} />
                    <Button type="primary" label="Read more" onClick={() => setSelectedJob(job)} />
                  </Stack>
                </Card>
              ))}

            </Stack>
          </Card>
        </GridItem>
        <GridItem>
          <Card paddingTop="24" paddingBottom="24" paddingLeft="12" paddingRight="12" sticky fullWidth>
            <Stack direction="vertical" gap="6">
              <Heading as="h2" size="h1">Selected Job</Heading>
              <Heading as="h3" size="h2">{selectedJob.title}</Heading>
              <Paragraph>{selectedJob.location}</Paragraph>
              <Paragraph>{selectedJob.type}</Paragraph>
              <Paragraph>{selectedJob.description}</Paragraph>
              <Heading as="h4" size="h3">Responsibilities</Heading>
              <List items={selectedJob.responsibilities} />
              <Heading as="h4" size="h3">Qualifications</Heading>
              <List items={selectedJob.qualifications} />
              <Button type="inverse" label="Apply" />
            </Stack>
          </Card>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Jobs;