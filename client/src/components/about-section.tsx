import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating efficient, scalable solutions that bridge the gap between network infrastructure and modern web development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional workspace with computer and networking equipment" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With a B.Sc. in Communication Engineering from Al-Quds University and extensive hands-on experience in both network infrastructure and full-stack development, I bring a unique perspective to technology solutions.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My experience spans from optimizing PS Core configurations at Ooredoo Palestine to developing modern web applications with React.js and Spring Boot. I'm passionate about creating tools that solve real-world problems.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-emerald-600">50+</div>
                  <div className="text-sm text-muted-foreground">Bugs Identified</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
