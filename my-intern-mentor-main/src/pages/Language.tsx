import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  Globe, 
  Volume2, 
  VolumeX,
  Mic,
  MicOff,
  Eye,
  Type,
  Accessibility,
  CheckCircle
} from "lucide-react";

interface Language {
  code: string;
  name: string;
  nativeName: string;
  available: boolean;
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", available: true },
  { code: "hi", name: "Hindi", nativeName: "हिंदी", available: true },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", available: true },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", available: true },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", available: true },
  { code: "mr", name: "Marathi", nativeName: "मराठी", available: true },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", available: true },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", available: true },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം", available: true },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", available: true },
  { code: "or", name: "Odia", nativeName: "ଓଡ଼ିଆ", available: false },
  { code: "as", name: "Assamese", nativeName: "অসমীয়া", available: false }
];

export default function Language() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [voiceInput, setVoiceInput] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const handleSaveSettings = () => {
    // Here you would save the settings to localStorage or backend
    console.log("Settings saved:", {
      language: selectedLanguage,
      voiceEnabled,
      voiceInput,
      highContrast,
      largeText,
      reducedMotion
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Globe className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Language & Accessibility</h1>
        <p className="text-muted-foreground">
          Customize your experience with language and accessibility options
        </p>
      </div>

      <div className="space-y-8">
        {/* Language Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Language Preferences
            </CardTitle>
            <CardDescription>
              Choose your preferred language for the interface
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {languages.map((language) => (
                  <div key={language.code} className="relative">
                    <Label
                      htmlFor={language.code}
                      className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-smooth ${
                        language.available 
                          ? selectedLanguage === language.code
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                          : "border-border/50 opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <RadioGroupItem 
                        value={language.code} 
                        id={language.code}
                        disabled={!language.available}
                      />
                      <div className="flex-1">
                        <div className="font-medium">{language.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {language.nativeName}
                        </div>
                      </div>
                      {selectedLanguage === language.code && (
                        <CheckCircle className="h-5 w-5 text-primary" />
                      )}
                    </Label>
                    
                    {!language.available && (
                      <div className="absolute top-2 right-2">
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Voice & Audio Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Volume2 className="h-5 w-5" />
              Voice & Audio Features
            </CardTitle>
            <CardDescription>
              Enable voice features for hands-free interaction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="font-medium">Voice Output</Label>
                <p className="text-sm text-muted-foreground">
                  Have recommendations and instructions read aloud
                </p>
              </div>
              <div className="flex items-center gap-2">
                {voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                <Switch checked={voiceEnabled} onCheckedChange={setVoiceEnabled} />
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="font-medium">Voice Input</Label>
                <p className="text-sm text-muted-foreground">
                  Fill forms and search using voice commands
                </p>
              </div>
              <div className="flex items-center gap-2">
                {voiceInput ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                <Switch checked={voiceInput} onCheckedChange={setVoiceInput} />
              </div>
            </div>

            {voiceInput && (
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Voice input requires microphone permissions. 
                  We'll ask for permission when you first use this feature.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Accessibility Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Accessibility className="h-5 w-5" />
              Accessibility Options
            </CardTitle>
            <CardDescription>
              Customize the interface for better accessibility
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="font-medium">High Contrast Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Increase contrast for better visibility
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <Switch checked={highContrast} onCheckedChange={setHighContrast} />
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="font-medium">Large Text</Label>
                <p className="text-sm text-muted-foreground">
                  Increase text size for easier reading
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Type className="h-4 w-4" />
                <Switch checked={largeText} onCheckedChange={setLargeText} />
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="font-medium">Reduced Motion</Label>
                <p className="text-sm text-muted-foreground">
                  Minimize animations and transitions
                </p>
              </div>
              <Switch checked={reducedMotion} onCheckedChange={setReducedMotion} />
            </div>
          </CardContent>
        </Card>

        {/* Regional Support */}
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Regional Language Support</CardTitle>
            <CardDescription>
              Helping bridge the digital divide across India
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                LakshyaIntern is committed to making internship opportunities accessible to students 
                from all backgrounds. Our multi-language support includes:
              </p>
              
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Interface translation in 10+ Indian languages
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Voice input/output in regional languages
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Cultural context-aware recommendations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Support for first-generation digital users
                </li>
              </ul>
              
              <p className="text-sm text-muted-foreground">
                Don't see your language? <Button variant="link" className="p-0 h-auto">Request it here</Button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Save Settings */}
        <div className="flex justify-center">
          <Button size="lg" onClick={handleSaveSettings} className="px-8">
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
}