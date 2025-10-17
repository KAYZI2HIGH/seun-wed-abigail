import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, guests } = await request.json();

  try {
    const invitationCardUrl =
      "https://yourdomain.com/assets/invitation-card.jpg";

    // Send beautiful confirmation to guest WITH INVITATION CARD ATTACHMENT
    const res = await resend.emails.send({
      from: "Adewole & Abigail <onboarding@resend.dev>",
      to: [email],
      subject: "🎉 Your Wedding Invitation & RSVP Confirmation",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Wedding Invitation & RSVP Confirmation</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);">
            <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.1);">
                <!-- Header with Couple Image -->
                <div style="background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%); padding: 40px 20px; text-align: center;">
                    <h1 style="color: white; font-size: 36px; margin: 0; font-family: 'Georgia', serif;">Adewole & Abigail</h1>
                    <p style="color: rgba(255,255,255,0.9); font-size: 18px; margin: 10px 0 0 0;">December 20, 2025</p>
                </div>

                <!-- Main Content -->
                <div style="padding: 40px 30px;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <div style="font-size: 48px; color: #d97706; margin-bottom: 10px;">🎉</div>
                        <h2 style="color: #1f2937; font-size: 28px; margin: 0; font-family: 'Georgia', serif;">Thank You for RSVPing!</h2>
                        <p style="color: #6b7280; font-size: 16px; margin: 10px 0 0 0;">We're thrilled you'll be celebrating with us</p>
                    </div>

                    <!-- Invitation Card Preview -->
                    <div style="text-align: center; margin: 30px 0; padding: 20px; background: #fef3c7; border-radius: 15px;">
                        <h3 style="color: #92400e; margin: 0 0 15px 0; font-size: 18px;">📨 Your Formal Invitation</h3>
                        <p style="color: #78350f; margin: 0 0 20px 0; font-size: 14px;">
                            We've attached your formal wedding invitation card to this email.<br>
                            You can save it, print it, or share it with your plus ones!
                        </p>
                        <div style="background: white; padding: 15px; border-radius: 10px; display: inline-block; border: 2px dashed #d97706;">
                            <div style="font-size: 48px; color: #d97706;">💌</div>
                            <p style="color: #92400e; margin: 10px 0 0 0; font-weight: bold;">invitation-card.png</p>
                        </div>
                    </div>

                    <!-- Guest Details -->
                    <div style="background: #fef3c7; border-radius: 15px; padding: 25px; margin: 30px 0; border-left: 4px solid #d97706;">
                        <h3 style="color: #92400e; margin: 0 0 15px 0; font-size: 18px;">Your RSVP Details</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                            <div>
                                <p style="color: #78350f; margin: 0; font-size: 14px; font-weight: bold;">Name</p>
                                <p style="color: #1f2937; margin: 5px 0 0 0; font-size: 16px;">${name}</p>
                            </div>
                            <div>
                                <p style="color: #78350f; margin: 0; font-size: 14px; font-weight: bold;">Number of Guests</p>
                                <p style="color: #1f2937; margin: 5px 0 0 0; font-size: 16px;">${guests}</p>
                            </div>
                        </div>
                    </div>

                    <!-- WEDDING SCHEDULE -->
                    <div style="border: 2px dashed #d97706; border-radius: 15px; padding: 25px; margin: 30px 0;">
                        <h3 style="color: #92400e; margin: 0 0 25px 0; font-size: 20px; text-align: center;">📅 Wedding Day Schedule</h3>
                        
                        <!-- Engagement -->
                        <div style="background: #fef3c7; border-radius: 12px; padding: 20px; margin-bottom: 20px; border-left: 4px solid #10b981;">
                            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                <div style="background: #10b981; color: white; padding: 8px 12px; border-radius: 8px; font-weight: bold; font-size: 14px;">Engagement</div>
                                <div style="margin-left: auto; background: #d1fae5; padding: 6px 12px; border-radius: 6px; font-weight: bold; color: #065f46;">08:00 AM</div>
                            </div>
                            <p style="color: #1f2937; margin: 0; font-weight: bold; font-size: 16px;">SPICE EVENT CENTRE</p>
                            <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px; line-height: 1.4;">
                                Plot 3, 1st Avenue, Ibara Housing Estate, Ibara, Abeokuta.
                            </p>
                        </div>

                        <!-- Church Ceremony -->
                        <div style="background: #f0f9ff; border-radius: 12px; padding: 20px; margin-bottom: 20px; border-left: 4px solid #0369a1;">
                            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                <div style="background: #0369a1; color: white; padding: 8px 12px; border-radius: 8px; font-weight: bold; font-size: 14px;">Church (RCCG)</div>
                                <div style="margin-left: auto; background: #e0f2fe; padding: 6px 12px; border-radius: 6px; font-weight: bold; color: #075985;">11:00 AM</div>
                            </div>
                            <p style="color: #1f2937; margin: 0; font-weight: bold; font-size: 16px;">Judah Family Mega Parish</p>
                            <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px; line-height: 1.4;">
                                4/5 Mercy Group Clinic Road, Abeokuta, Ogun Province 1, Ogun State.
                            </p>
                        </div>

                        <!-- Reception -->
                        <div style="background: #fdf2f8; border-radius: 12px; padding: 20px; border-left: 4px solid #db2777;">
                            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                <div style="background: #db2777; color: white; padding: 8px 12px; border-radius: 8px; font-weight: bold; font-size: 14px;">Reception (After Church)</div>
                            </div>
                            <p style="color: #1f2937; margin: 0; font-weight: bold; font-size: 16px;">SPICE EVENT CENTRE</p>
                            <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px; line-height: 1.4;">
                                Plot 3, 1st Avenue, Ibara Housing Estate, Ibara, Abeokuta.
                            </p>
                        </div>

                        <!-- Dress Code -->
                        <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 12px; padding: 20px; margin-top: 20px; text-align: center;">
                            <h4 style="color: white; margin: 0 0 10px 0; font-size: 16px;">🎨 Colour for the day</h4>
                            <div style="display: flex; justify-content: center; gap: 15px; align-items: center;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div style="width: 20px; height: 20px; background: #10b981; border-radius: 50%; border: 2px solid white;"></div>
                                    <span style="color: white; font-weight: bold;">EMERALD GREEN</span>
                                </div>
                                <div style="color: white; font-weight: bold;">&</div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div style="width: 20px; height: 20px; background: #db2777; border-radius: 50%; border: 2px solid white;"></div>
                                    <span style="color: white; font-weight: bold;">FUSHIA PINK</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Final Message -->
                    <div style="text-align: center; margin-top: 40px;">
                        <p style="color: #6b7280; font-size: 16px; line-height: 1.6;">
                            "So they are no longer two, but one flesh. Therefore, what God has joined together, no human being must separate."<br>
                            <em style="color: #d97706;">- Matthew 19:6</em>
                        </p>
                        <div style="margin-top: 30px; padding-top: 30px; border-top: 1px solid #e5e7eb;">
                            <p style="color: #1f2937; font-size: 18px; font-family: 'Georgia', serif; margin: 0;">
                                With love and excitement,<br>
                                <strong style="color: #d97706; font-size: 20px;">Adewole & Abigail</strong>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div style="background: #1f2937; padding: 20px; text-align: center;">
                    <p style="color: #9ca3af; margin: 0; font-size: 14px;">
                        Your formal invitation card is attached to this email. Save it for the big day!
                    </p>
                </div>
            </div>
        </body>
        </html>
      `,
      attachments: [
        {
          filename: "Adewole-Abigail-Wedding-Invitation.png",
          path: invitationCardUrl,
        },
      ],
    });
      
      console.log(res)

    // Send beautiful notification to you
    await resend.emails.send({
      from: "Wedding RSVP <onboarding@resend.dev>",
      to: ["dadavictory2000@gmail.com"],
      subject: "🎊 New Wedding RSVP Received!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New RSVP Notification</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);">
            <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.1);">
                <!-- Header -->
                <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 30px 20px; text-align: center;">
                    <h1 style="color: white; font-size: 32px; margin: 0; font-family: 'Georgia', serif;">New Wedding RSVP! 🎉</h1>
                    <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin: 10px 0 0 0;">Someone just confirmed their attendance</p>
                </div>

                <!-- RSVP Details -->
                <div style="padding: 40px 30px;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <div style="font-size: 48px; color: #059669; margin-bottom: 10px;">💌</div>
                        <h2 style="color: #1f2937; font-size: 24px; margin: 0;">You have a new RSVP</h2>
                        <p style="color: #6b7280; margin: 10px 0 0 0;">Invitation card was sent to the guest</p>
                    </div>

                    <!-- Guest Information Card -->
                    <div style="background: #ecfdf5; border-radius: 15px; padding: 30px; margin: 30px 0; border: 2px solid #10b981;">
                        <h3 style="color: #065f46; margin: 0 0 20px 0; font-size: 20px; text-align: center;">Guest Information</h3>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
                            <div style="text-align: center;">
                                <div style="background: #d1fae5; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; font-size: 24px; color: #059669;">👤</div>
                                <p style="color: #065f46; margin: 0; font-weight: bold; font-size: 14px;">Name</p>
                                <p style="color: #1f2937; margin: 5px 0 0 0; font-size: 18px; font-weight: bold;">${name}</p>
                            </div>
                            <div style="text-align: center;">
                                <div style="background: #d1fae5; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; font-size: 24px; color: #059669;">📧</div>
                                <p style="color: #065f46; margin: 0; font-weight: bold; font-size: 14px;">Email</p>
                                <p style="color: #1f2937; margin: 5px 0 0 0; font-size: 16px;">${email}</p>
                            </div>
                        </div>

                        <div style="text-align: center;">
                            <div style="background: #d1fae5; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; font-size: 24px; color: #059669;">👥</div>
                            <p style="color: #065f46; margin: 0; font-weight: bold; font-size: 14px;">Number of Guests</p>
                            <p style="color: #1f2937; margin: 5px 0 0 0; font-size: 24px; font-weight: bold;">${guests}</p>
                        </div>
                    </div>

                    <!-- Quick Stats -->
                    <div style="background: #f8fafc; border-radius: 15px; padding: 20px; text-align: center;">
                        <p style="color: #64748b; margin: 0; font-size: 14px;">
                            RSVP received on: <strong>${new Date().toLocaleDateString(
                              "en-US",
                              {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}</strong>
                        </p>
                    </div>

                    <!-- Action Button -->
                    <div style="text-align: center; margin-top: 30px;">
                        <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; font-size: 16px;">
                            Reply to Guest
                        </a>
                    </div>
                </div>

                <!-- Footer -->
                <div style="background: #1f2937; padding: 20px; text-align: center;">
                    <p style="color: #9ca3af; margin: 0; font-size: 14px;">
                        Wedding of Adewole & Abigail • December 20, 2025
                    </p>
                </div>
            </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
