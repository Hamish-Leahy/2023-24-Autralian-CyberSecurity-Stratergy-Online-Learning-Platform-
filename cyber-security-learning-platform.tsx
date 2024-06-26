import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Shield, Globe, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react'

const CyberSecurityLearningPlatform = () => {
  const [currentSection, setCurrentSection] = useState(null);
  const [completedSections, setCompletedSections] = useState([]);

  const sections = [
    {
      id: "overview",
      name: "Executive Summary",
      icon: <BookOpen className="h-6 w-6" />,
      content: (
        <>
          <h3 className="text-xl font-semibold mb-2">2023–2030 Australian Cyber Security Strategy</h3>
          <p className="mb-4">By 2030, Australia will be a world leader in cyber security. The strategy outlines six 'cyber shields' to defend citizens and businesses from cyber threats:</p>
          <ol className="list-decimal pl-5 mb-4">
            <li>Strong businesses and citizens</li>
            <li>Safe technology</li>
            <li>World-class threat sharing and blocking</li>
            <li>Protected critical infrastructure</li>
            <li>Sovereign capabilities</li>
            <li>Resilient region and global leadership</li>
          </ol>
          <p>These shields provide layers of defence, making Australia a harder target for cyber attacks.</p>
        </>
      )
    },
    {
      id: "context",
      name: "Strategic Context",
      icon: <Globe className="h-6 w-6" />,
      content: (
        <>
          <h3 className="text-xl font-semibold mb-2">Strategic Context</h3>
          <p className="mb-4">Australia faces a complex cyber security landscape with growing threats and opportunities:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Cyber attacks are accelerating, targeting networks and data</li>
            <li>Critical technologies like AI and quantum computing present new challenges</li>
            <li>Australia has an opportunity to lead in cyber security</li>
            <li>We have strong legislative systems and cyber capabilities</li>
            <li>Australia is a trusted partner in the region and globally</li>
          </ul>
        </>
      )
    },
    {
      id: "shield1",
      name: "Strong businesses and citizens",
      icon: <Shield className="h-6 w-6" />,
      content: (
        <>
          <h3 className="text-xl font-semibold mb-2">Strong businesses and citizens</h3>
          <p className="mb-4">Key initiatives:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Support small and medium businesses to strengthen their cyber security</li>
            <li>Help Australians defend themselves from cyber threats</li>
            <li>Disrupt and deter cyber threat actors</li>
            <li>Break the ransomware business model</li>
            <li>Provide clear cyber guidance for businesses</li>
            <li>Make it easier to access advice and support after a cyber incident</li>
            <li>Secure identities and support victims of identity theft</li>
          </ul>
        </>
      )
    },
    {
      id: "shield2",
      name: "Safe technology",
      icon: <Shield className="h-6 w-6" />,
      content: (
        <>
          <h3 className="text-xl font-semibold mb-2">Safe technology</h3>
          <p className="mb-4">Key initiatives:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Ensure Australians can trust their digital products and software</li>
            <li>Protect our most valuable datasets</li>
            <li>Promote the safe use of emerging technology</li>
          </ul>
        </>
      )
    },
    {
      id: "shield3",
      name: "World-class threat sharing and blocking",
      icon: <Shield className="h-6 w-6" />,
      content: (
        <>
          <h3 className="text-xl font-semibold mb-2">World-class threat sharing and blocking</h3>
          <p className="mb-4">Key initiatives:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Create a whole-of-economy threat intelligence network</li>
            <li>Scale threat blocking capabilities to stop cyber attacks</li>
          </ul>
        </>
      )
    },
    {
      id: "shield4",
      name: "Protected critical infrastructure",
      icon: <Shield className="h-6 w-6" />,
      content: (
        <>
          <h3 className="text-xl font-semibold mb-2">Protected critical infrastructure</h3>
          <p className="mb-4">Key initiatives:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Clarify the scope of critical infrastructure regulation</li>
            <li>Strengthen cyber security obligations for critical infrastructure</li>
            <li>Uplift cyber security of the Commonwealth Government</li>
            <li>Pressure-test our critical infrastructure to identify vulnerabilities</li>
          </ul>
        </>
      )
    },
    {
      id: "shield5",
      name: "Sovereign capabilities",
      icon: <Shield className="h-6 w-6" />,
      content: (
        <>
          <h3 className="text-xl font-semibold mb-2">Sovereign capabilities</h3>
          <p className="mb-4">Key initiatives:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Grow and professionalise our national cyber workforce</li>
            <li>Accelerate our local cyber industry, research and innovation</li>
          </ul>
        </>
      )
    },
    {
      id: "shield6",
      name: "Resilient region and global leadership",
      icon: <Shield className="h-6 w-6" />,
      content: (
        <>
          <h3 className="text-xl font-semibold mb-2">Resilient region and global leadership</h3>
          <p className="mb-4">Key initiatives:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Support a cyber resilient region as the partner of choice</li>
            <li>Shape, uphold and defend international cyber rules, norms and standards</li>
          </ul>
        </>
      )
    },
    {
      id: "implementation",
      name: "Implementation and Evaluation",
      icon: <CheckCircle className="h-6 w-6" />,
      content: (
        <>
          <h3 className="text-xl font-semibold mb-2">Implementation and Evaluation</h3>
          <p className="mb-4">Key steps:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Allocate resources to strategy implementation and governance</li>
            <li>Define clear accountabilities for delivery</li>
            <li>Continue close consultation with industry and the community</li>
            <li>Conduct robust evaluation of our progress</li>
            <li>Adapt our plan in response to changes in the cyber landscape</li>
          </ul>
        </>
      )
    }
  ];

  const completeSection = (sectionId) => {
    if (!completedSections.includes(sectionId)) {
      setCompletedSections([...completedSections, sectionId]);
    }
  };

  const resetProgress = () => {
    setCompletedSections([]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Australian Cyber Security Strategy Learning Platform</h1>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sections">All Sections</TabsTrigger>
          <TabsTrigger value="progress">Your Progress</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>2023–2030 Australian Cyber Security Strategy</CardTitle>
              <CardDescription>Learn about Australia's vision to become a world leader in cyber security by 2030</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">The Australian Cyber Security Strategy outlines six 'cyber shields' to help defend citizens and businesses from cyber threats. Each shield provides an additional layer of defence, making Australia a harder target.</p>
              <Button onClick={() => setCurrentSection("overview")}>Start Learning</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="sections">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((section) => (
              <Card key={section.id}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {section.icon}
                    <span className="ml-2">{section.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Learn about {section.name} and its role in Australia's cyber security strategy.</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => setCurrentSection(section.id)}
                    variant={completedSections.includes(section.id) ? "outline" : "default"}
                  >
                    {completedSections.includes(section.id) ? "Review" : "Start Learning"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="progress">
          <Card>
            <CardHeader>
              <CardTitle>Your Learning Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {sections.map((section) => (
                  <li key={section.id} className="flex items-center justify-between mb-2">
                    <span className="flex items-center">
                      {completedSections.includes(section.id) ? (
                        <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                      ) : (
                        <div className="h-6 w-6 rounded-full border-2 border-gray-300 mr-2" />
                      )}
                      {section.name}
                    </span>
                    <Button 
                      onClick={() => setCurrentSection(section.id)}
                      variant="outline"
                      size="sm"
                    >
                      {completedSections.includes(section.id) ? "Review" : "Start"}
                    </Button>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Button onClick={resetProgress} variant="destructive">
                  Reset Progress
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {currentSection && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <Button variant="ghost" onClick={() => setCurrentSection(null)} className="mr-2">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              {sections.find(s => s.id === currentSection).name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {sections.find(s => s.id === currentSection).content}
          </CardContent>
          <CardFooter>
            <Button 
              onClick={() => completeSection(currentSection)}
              disabled={completedSections.includes(currentSection)}
            >
              {completedSections.includes(currentSection) ? "Completed" : "Mark as Completed"}
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default CyberSecurityLearningPlatform;
