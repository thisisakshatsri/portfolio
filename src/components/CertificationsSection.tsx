
import React, { useEffect, useRef } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';

type Certification = {
    name: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
};

const CertificationCard = ({ cert, index }: { cert: Certification; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in-view');
                    }, index * 150);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, [index]);

    return (
        <Card
            ref={cardRef}
            className="card-glow animate-slide-up hover-lift group transition-all duration-300 hover:border-primary/50"
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <CardContent className="p-5 flex items-start space-x-4">
                <div className="mt-1">
                    <Award className="h-5 w-5 text-primary group-hover:animate-pulse-slow" />
                </div>

                <div className="flex-1">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="font-medium group-hover:text-primary transition-colors">{cert.name}</h3>
                            <p className="text-primary text-sm">{cert.issuer}</p>
                        </div>
                        {cert.credentialUrl && (
                            <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors ml-2 shrink-0"
                                aria-label={`View ${cert.name} credential`}
                            >
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        )}
                    </div>

                    <div className="flex items-center mt-2 text-muted-foreground group-hover:text-primary/70 transition-colors">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-xs">{cert.date}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

const CertificationsSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in-view');
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const certifications: Certification[] = [
        {
            name: "SQL (Advanced)",
            issuer: "HackerRank",
            date: "2024",
            credentialUrl: "https://www.hackerrank.com/certificates/6fee1c2b81d3"
        },
        {
            name: "Problem Solving (Intermediate)",
            issuer: "HackerRank",
            date: "2024",
            credentialUrl: "https://www.hackerrank.com/certificates/3ea5a61c96aa"
        }
    ];

    return (
        <section ref={sectionRef} id="certifications" className="py-20 animate-slide-up">
            <div className="container max-w-5xl mx-auto px-4">
                <h2 className="section-title text-center md:text-left mb-10">Certifications</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    {certifications.map((cert, index) => (
                        <CertificationCard key={index} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;
