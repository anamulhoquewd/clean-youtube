import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogFooter } from "@/components/ui/dialog";
import { UseFormReturn } from "react-hook-form";

export default function AddPlaylistForm({
  form,
  onSubmit,
  loading,
}: {
  form: UseFormReturn<{ value: string }>;
  onSubmit: (data: { value: string }) => void;
  loading: boolean;
}) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full px-1"
      >
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="cursor-pointer">
                Playlist ID or URL
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter playlist ID or URL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          <Button type="submit" className="cursor-pointer" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
