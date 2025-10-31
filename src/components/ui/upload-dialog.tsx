"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ExternalLink, Upload, Link as LinkIcon, CheckCircle2 } from "lucide-react";

interface UploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function UploadDialog({ open, onOpenChange }: UploadDialogProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [formData, setFormData] = useState({
    shareLink: "",
    title: "",
    description: "",
    category: "",
    tags: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    setStep("success");
    setTimeout(() => {
      setStep("form");
      setFormData({ shareLink: "", title: "", description: "", category: "", tags: "" });
      onOpenChange(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border max-w-2xl max-h-[90vh] overflow-y-auto">
        {step === "form" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-lg font-normal">Upload Your NotebookLM</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Share your Google NotebookLM with the community by providing the share link and details.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              {/* Share Link */}
              <div className="space-y-2">
                <Label htmlFor="shareLink" className="text-sm font-medium flex items-center gap-2">
                  <LinkIcon className="h-4 w-4" />
                  NotebookLM Share Link *
                </Label>
                <div className="relative">
                  <Input
                    id="shareLink"
                    type="url"
                    placeholder="https://notebooklm.google.com/notebook/a327ab01-27c8-4999-be5b-2120cc8fc3b4"
                    value={formData.shareLink}
                    onChange={(e) => setFormData({ ...formData, shareLink: e.target.value })}
                    required
                    className="bg-background border-border font-mono text-xs pr-10"
                  />
                  <ExternalLink className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-xs text-muted-foreground font-mono">
                  Make sure your notebook is set to "Anyone with the link can view"
                </p>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-sm font-medium">
                  Notebook Title *
                </Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="e.g., Machine Learning Fundamentals"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium">
                  Description *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe what your notebook covers and who it's for..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={4}
                  className="bg-background border-border resize-none"
                />
                <p className="text-xs text-muted-foreground">
                  {formData.description.length}/500 characters
                </p>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category" className="text-sm font-medium">
                  Category *
                </Label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                  className="w-full h-10 px-3 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a category</option>
                  <option value="ai">AI & Machine Learning</option>
                  <option value="science">Science</option>
                  <option value="technology">Technology</option>
                  <option value="business">Business</option>
                  <option value="health">Health & Medicine</option>
                  <option value="history">History</option>
                  <option value="philosophy">Philosophy</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="literature">Literature</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <Label htmlFor="tags" className="text-sm font-medium">
                  Tags
                </Label>
                <Input
                  id="tags"
                  type="text"
                  placeholder="e.g., neural networks, deep learning, AI"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="bg-background border-border"
                />
                <p className="text-xs text-muted-foreground">
                  Separate multiple tags with commas
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="rounded-full h-9 px-6 text-sm font-mono"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="rounded-full h-9 px-6 text-sm font-mono bg-white text-black hover:bg-white/90"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Submit Notebook
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-lg font-medium mb-2">Notebook Submitted!</h3>
            <p className="text-sm text-muted-foreground text-center max-w-md">
              Your notebook has been submitted for review. It will appear in the directory once approved.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
