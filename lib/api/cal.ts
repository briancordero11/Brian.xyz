// Cal.com API integration
// This is a placeholder that will be replaced with actual implementation
// when the Cal.com API is available

export interface CalEvent {
  id: string
  title: string
  description: string
  length: number
  slug: string
  url: string
}

export async function getCalEvents(): Promise<CalEvent[]> {
  // This is a placeholder function that will be replaced with actual API call
  // For now, return mock data that matches the expected structure

  try {
    // In the future, this will be replaced with:
    // const response = await fetch('https://api.cal.com/v1/event-types', {
    //   headers: {
    //     'Authorization': `Bearer ${process.env.CAL_API_KEY}`
    //   }
    // });
    // const data = await response.json();
    // return data.event_types;

    // Mock data for preview
    return [
      {
        id: "1",
        title: "Initial Consultation",
        description: "A 30-minute call to discuss your project needs and how I can help.",
        length: 30,
        slug: "initial-consultation",
        url: "https://cal.com/briancordero/initial-consultation",
      },
      {
        id: "2",
        title: "Strategy Session",
        description: "A 60-minute deep dive into your business strategy and technology needs.",
        length: 60,
        slug: "strategy-session",
        url: "https://cal.com/briancordero/strategy-session",
      },
      {
        id: "3",
        title: "Quick Chat",
        description: "A 15-minute call for quick questions or follow-ups.",
        length: 15,
        slug: "quick-chat",
        url: "https://cal.com/briancordero/quick-chat",
      },
    ]
  } catch (error) {
    console.error("Error fetching Cal.com events:", error)
    return []
  }
}

export function getCalLink(slug = "initial-consultation"): string {
  // This function returns a Cal.com booking link
  // In the future, this might include additional parameters or logic
  return `https://cal.com/briancordero/${slug}`
}
