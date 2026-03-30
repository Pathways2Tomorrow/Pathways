import { useState } from 'react';
import { ChevronRight, Lightbulb, Check } from 'lucide-react';

export const AssessmentPreview = ({ onTakeAssessment }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const question = {
    text: "When working on a project, I prefer to...",
    answers: [
      { id: 'a', text: 'Lead the team and make decisions', trait: 'Leadership' },
      { id: 'b', text: 'Analyze data and solve complex problems', trait: 'Analytical' },
      { id: 'c', text: 'Create and design new ideas', trait: 'Creative' },
    ]
  };

  const handleSelect = (answerId) => {
    setSelectedAnswer(answerId);
    setTimeout(() => setShowResult(true), 500);
  };

  const resetDemo = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <section id="assessment" className="section-padding" data-testid="assessment-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block bg-[#F05D5E] text-white px-4 py-2 rounded-full border-2 border-[#111827] font-semibold text-sm mb-4" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
            Try It Out
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827] mb-6"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            See How It
            <br />
            <span className="text-[#00A896]">Works</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our assessment isn't just another personality quiz. It's built on credible, research-backed tools that actually reveal who you are and where you could thrive.
          </p>
          
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 bg-[#FFD166] rounded-lg border-2 border-[#111827] flex items-center justify-center flex-shrink-0" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
              <Lightbulb strokeWidth={2.5} size={20} className="text-[#111827]" />
            </div>
            <div>
              <h4 className="font-bold text-[#111827]" style={{ fontFamily: 'Outfit, sans-serif' }}>Not Sure Where to Start?</h4>
              <p className="text-gray-600 text-sm">That's the whole point. Uncertainty is your starting point, not your weakness.</p>
            </div>
          </div>
          
          <button
            onClick={onTakeAssessment}
            className="btn-primary flex items-center gap-2"
            data-testid="take-full-assessment-btn"
          >
            Take Full Assessment
            <ChevronRight strokeWidth={2.5} size={20} />
          </button>
        </div>

        {/* Right - Interactive Demo */}
        <div className="neo-card p-8" data-testid="assessment-demo-card">
          {!showResult ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-gray-500">Question 1 of 15</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i} 
                      className={`w-8 h-2 rounded-full ${i === 1 ? 'bg-[#00A896]' : 'bg-gray-200'}`}
                    />
                  ))}
                </div>
              </div>

              <h3 
                className="text-2xl font-bold text-[#111827] mb-8"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {question.text}
              </h3>

              <div className="space-y-4">
                {question.answers.map((answer) => (
                  <button
                    key={answer.id}
                    onClick={() => handleSelect(answer.id)}
                    className={`w-full p-5 text-left rounded-xl border-2 border-[#111827] transition-all duration-200 ${
                      selectedAnswer === answer.id
                        ? 'bg-[#00A896] text-white'
                        : 'bg-white hover:bg-gray-50'
                    }`}
                    style={{ boxShadow: selectedAnswer === answer.id ? '0 0 0 0 #111827' : '3px 3px 0 0 #111827' }}
                    data-testid={`answer-${answer.id}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm ${
                        selectedAnswer === answer.id 
                          ? 'border-white bg-white text-[#00A896]' 
                          : 'border-[#111827]'
                      }`}>
                        {selectedAnswer === answer.id ? <Check strokeWidth={3} size={16} /> : answer.id.toUpperCase()}
                      </span>
                      <span className="font-medium">{answer.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-8" data-testid="demo-result">
              <div className="w-20 h-20 bg-[#00A896] rounded-full border-2 border-[#111827] flex items-center justify-center mx-auto mb-6" style={{ boxShadow: '4px 4px 0 0 #111827' }}>
                <Check strokeWidth={2.5} size={40} className="text-white" />
              </div>
              <h3 
                className="text-2xl font-bold text-[#111827] mb-3"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Great Choice!
              </h3>
              <p className="text-gray-600 mb-2">
                You selected: <span className="font-bold text-[#00A896]">
                  {question.answers.find(a => a.id === selectedAnswer)?.trait}
                </span>
              </p>
              <p className="text-gray-500 text-sm mb-8">
                The full assessment has 15 more questions to build your complete profile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetDemo}
                  className="btn-secondary"
                  data-testid="try-again-btn"
                >
                  Try Again
                </button>
                <button
                  onClick={onTakeAssessment}
                  className="btn-primary"
                  data-testid="continue-assessment-btn"
                >
                  Continue Assessment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
